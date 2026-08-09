# `amazonmqConfiguration` Submodule <a name="`amazonmqConfiguration` Submodule" id="@cdktn/provider-awscc.amazonmqConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmazonmqConfiguration <a name="AmazonmqConfiguration" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration awscc_amazonmq_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmazonmqConfiguration(Construct Scope, string Id, AmazonmqConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig">AmazonmqConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig">AmazonmqConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetAuthenticationStrategy">ResetAuthenticationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|AmazonmqConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags">AmazonmqConfigurationTags</a>[]

---

##### `ResetAuthenticationStrategy` <a name="ResetAuthenticationStrategy" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetAuthenticationStrategy"></a>

```csharp
private void ResetAuthenticationStrategy()
```

##### `ResetData` <a name="ResetData" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AmazonmqConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AmazonmqConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AmazonmqConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AmazonmqConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AmazonmqConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AmazonmqConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AmazonmqConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AmazonmqConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AmazonmqConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList">AmazonmqConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.authenticationStrategyInput">AuthenticationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.engineTypeInput">EngineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags">AmazonmqConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.authenticationStrategy">AuthenticationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.tags"></a>

```csharp
public AmazonmqConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList">AmazonmqConfigurationTagsList</a>

---

##### `AuthenticationStrategyInput`<sup>Optional</sup> <a name="AuthenticationStrategyInput" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.authenticationStrategyInput"></a>

```csharp
public string AuthenticationStrategyInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.engineTypeInput"></a>

```csharp
public string EngineTypeInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|AmazonmqConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags">AmazonmqConfigurationTags</a>[]

---

##### `AuthenticationStrategy`<sup>Required</sup> <a name="AuthenticationStrategy" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.authenticationStrategy"></a>

```csharp
public string AuthenticationStrategy { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmazonmqConfigurationConfig <a name="AmazonmqConfigurationConfig" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmazonmqConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EngineType,
    string Name,
    string AuthenticationStrategy = null,
    string Data = null,
    string Description = null,
    string EngineVersion = null,
    IResolvable|AmazonmqConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.engineType">EngineType</a></code> | <code>string</code> | The type of broker engine. Note: Currently, Amazon MQ only supports ACTIVEMQ for creating and editing broker configurations. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.name">Name</a></code> | <code>string</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.authenticationStrategy">AuthenticationStrategy</a></code> | <code>string</code> | The authentication strategy associated with the configuration. The default is SIMPLE. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.data">Data</a></code> | <code>string</code> | The base64-encoded XML configuration. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.description">Description</a></code> | <code>string</code> | The description of the configuration. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | The version of the broker engine. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags">AmazonmqConfigurationTags</a>[]</code> | Create tags when creating the configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.engineType"></a>

```csharp
public string EngineType { get; set; }
```

- *Type:* string

The type of broker engine. Note: Currently, Amazon MQ only supports ACTIVEMQ for creating and editing broker configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#engine_type AmazonmqConfiguration#engine_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#name AmazonmqConfiguration#name}

---

##### `AuthenticationStrategy`<sup>Optional</sup> <a name="AuthenticationStrategy" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.authenticationStrategy"></a>

```csharp
public string AuthenticationStrategy { get; set; }
```

- *Type:* string

The authentication strategy associated with the configuration. The default is SIMPLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#authentication_strategy AmazonmqConfiguration#authentication_strategy}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

The base64-encoded XML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#data AmazonmqConfiguration#data}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#description AmazonmqConfiguration#description}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

The version of the broker engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#engine_version AmazonmqConfiguration#engine_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|AmazonmqConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags">AmazonmqConfigurationTags</a>[]

Create tags when creating the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#tags AmazonmqConfiguration#tags}

---

### AmazonmqConfigurationTags <a name="AmazonmqConfigurationTags" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmazonmqConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#key AmazonmqConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#value AmazonmqConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#key AmazonmqConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amazonmq_configuration#value AmazonmqConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmazonmqConfigurationTagsList <a name="AmazonmqConfigurationTagsList" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmazonmqConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.get"></a>

```csharp
private AmazonmqConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags">AmazonmqConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|AmazonmqConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags">AmazonmqConfigurationTags</a>[]

---


### AmazonmqConfigurationTagsOutputReference <a name="AmazonmqConfigurationTagsOutputReference" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmazonmqConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags">AmazonmqConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmazonmqConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amazonmqConfiguration.AmazonmqConfigurationTags">AmazonmqConfigurationTags</a>

---



