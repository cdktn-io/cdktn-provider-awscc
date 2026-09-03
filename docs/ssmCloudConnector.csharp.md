# `ssmCloudConnector` Submodule <a name="`ssmCloudConnector` Submodule" id="@cdktn/provider-awscc.ssmCloudConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmCloudConnector <a name="SsmCloudConnector" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector awscc_ssm_cloud_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnector(Construct Scope, string Id, SsmCloudConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig">SsmCloudConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig">SsmCloudConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putConfiguration"></a>

```csharp
private void PutConfiguration(SsmCloudConnectorConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putTags"></a>

```csharp
private void PutTags(IResolvable|SsmCloudConnectorTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmCloudConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmCloudConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmCloudConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmCloudConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmCloudConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmCloudConnector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmCloudConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmCloudConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmCloudConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorArn">CloudConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorId">CloudConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference">SsmCloudConnectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList">SsmCloudConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArnInput">ConfigConnectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArn">ConfigConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudConnectorArn`<sup>Required</sup> <a name="CloudConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorArn"></a>

```csharp
public string CloudConnectorArn { get; }
```

- *Type:* string

---

##### `CloudConnectorId`<sup>Required</sup> <a name="CloudConnectorId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorId"></a>

```csharp
public string CloudConnectorId { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configuration"></a>

```csharp
public SsmCloudConnectorConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference">SsmCloudConnectorConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tags"></a>

```csharp
public SsmCloudConnectorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList">SsmCloudConnectorTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ConfigConnectorArnInput`<sup>Optional</sup> <a name="ConfigConnectorArnInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArnInput"></a>

```csharp
public string ConfigConnectorArnInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configurationInput"></a>

```csharp
public IResolvable|SsmCloudConnectorConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tagsInput"></a>

```csharp
public IResolvable|SsmCloudConnectorTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]

---

##### `ConfigConnectorArn`<sup>Required</sup> <a name="ConfigConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArn"></a>

```csharp
public string ConfigConnectorArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmCloudConnectorConfig <a name="SsmCloudConnectorConfig" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfigConnectorArn,
    SsmCloudConnectorConfiguration Configuration,
    string DisplayName,
    string RoleArn,
    string Description = null,
    IResolvable|SsmCloudConnectorTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configConnectorArn">ConfigConnectorArn</a></code> | <code>string</code> | The ARN of the AWS Config connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | The configuration for the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The IAM role ARN used by the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.description">Description</a></code> | <code>string</code> | The description of the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]</code> | Tags to apply to the cloud connector. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigConnectorArn`<sup>Required</sup> <a name="ConfigConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configConnectorArn"></a>

```csharp
public string ConfigConnectorArn { get; set; }
```

- *Type:* string

The ARN of the AWS Config connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#config_connector_arn SsmCloudConnector#config_connector_arn}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configuration"></a>

```csharp
public SsmCloudConnectorConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

The configuration for the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#configuration SsmCloudConnector#configuration}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#display_name SsmCloudConnector#display_name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The IAM role ARN used by the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#role_arn SsmCloudConnector#role_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#description SsmCloudConnector#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.tags"></a>

```csharp
public IResolvable|SsmCloudConnectorTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]

Tags to apply to the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#tags SsmCloudConnector#tags}

---

### SsmCloudConnectorConfiguration <a name="SsmCloudConnectorConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfiguration {
    SsmCloudConnectorConfigurationAzureConfiguration AzureConfiguration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration.property.azureConfiguration">AzureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a></code> | Configuration for connecting to Azure. |

---

##### `AzureConfiguration`<sup>Required</sup> <a name="AzureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration.property.azureConfiguration"></a>

```csharp
public SsmCloudConnectorConfigurationAzureConfiguration AzureConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

Configuration for connecting to Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#azure_configuration SsmCloudConnector#azure_configuration}

---

### SsmCloudConnectorConfigurationAzureConfiguration <a name="SsmCloudConnectorConfigurationAzureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfigurationAzureConfiguration {
    string ApplicationId,
    string TenantId,
    string ApplicationDisplayName = null,
    SsmCloudConnectorConfigurationAzureConfigurationTargets Targets = null,
    string TenantDisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationId">ApplicationId</a></code> | <code>string</code> | The Azure AD application ID. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantId">TenantId</a></code> | <code>string</code> | The Azure AD tenant ID. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationDisplayName">ApplicationDisplayName</a></code> | <code>string</code> | The display name of the Azure AD application. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a></code> | The targets for the cloud connector. If omitted, the entire tenant is targeted. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantDisplayName">TenantDisplayName</a></code> | <code>string</code> | The display name of the Azure AD tenant. |

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The Azure AD application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#application_id SsmCloudConnector#application_id}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The Azure AD tenant ID. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#tenant_id SsmCloudConnector#tenant_id}

---

##### `ApplicationDisplayName`<sup>Optional</sup> <a name="ApplicationDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationDisplayName"></a>

```csharp
public string ApplicationDisplayName { get; set; }
```

- *Type:* string

The display name of the Azure AD application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#application_display_name SsmCloudConnector#application_display_name}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.targets"></a>

```csharp
public SsmCloudConnectorConfigurationAzureConfigurationTargets Targets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

The targets for the cloud connector. If omitted, the entire tenant is targeted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#targets SsmCloudConnector#targets}

---

##### `TenantDisplayName`<sup>Optional</sup> <a name="TenantDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantDisplayName"></a>

```csharp
public string TenantDisplayName { get; set; }
```

- *Type:* string

The display name of the Azure AD tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#tenant_display_name SsmCloudConnector#tenant_display_name}

---

### SsmCloudConnectorConfigurationAzureConfigurationTargets <a name="SsmCloudConnectorConfigurationAzureConfigurationTargets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfigurationAzureConfigurationTargets {
    IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[] Subscriptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets.property.subscriptions">Subscriptions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]</code> | List of Azure subscriptions. |

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets.property.subscriptions"></a>

```csharp
public IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[] Subscriptions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]

List of Azure subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#subscriptions SsmCloudConnector#subscriptions}

---

### SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions {
    string DisplayName = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Azure subscription. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.id">Id</a></code> | <code>string</code> | The Azure subscription ID. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#display_name SsmCloudConnector#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The Azure subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#id SsmCloudConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SsmCloudConnectorTags <a name="SsmCloudConnectorTags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#key SsmCloudConnector#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#value SsmCloudConnector#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#key SsmCloudConnector#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_cloud_connector#value SsmCloudConnector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmCloudConnectorConfigurationAzureConfigurationOutputReference <a name="SsmCloudConnectorConfigurationAzureConfigurationOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfigurationAzureConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetApplicationDisplayName">ResetApplicationDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTenantDisplayName">ResetTenantDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.putTargets"></a>

```csharp
private void PutTargets(SsmCloudConnectorConfigurationAzureConfigurationTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

---

##### `ResetApplicationDisplayName` <a name="ResetApplicationDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetApplicationDisplayName"></a>

```csharp
private void ResetApplicationDisplayName()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTargets"></a>

```csharp
private void ResetTargets()
```

##### `ResetTenantDisplayName` <a name="ResetTenantDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTenantDisplayName"></a>

```csharp
private void ResetTenantDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference">SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayNameInput">ApplicationDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayNameInput">TenantDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayName">ApplicationDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayName">TenantDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targets"></a>

```csharp
public SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference">SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference</a>

---

##### `ApplicationDisplayNameInput`<sup>Optional</sup> <a name="ApplicationDisplayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayNameInput"></a>

```csharp
public string ApplicationDisplayNameInput { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targetsInput"></a>

```csharp
public IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargets TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

---

##### `TenantDisplayNameInput`<sup>Optional</sup> <a name="TenantDisplayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayNameInput"></a>

```csharp
public string TenantDisplayNameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ApplicationDisplayName`<sup>Required</sup> <a name="ApplicationDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayName"></a>

```csharp
public string ApplicationDisplayName { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `TenantDisplayName`<sup>Required</sup> <a name="TenantDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayName"></a>

```csharp
public string TenantDisplayName { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmCloudConnectorConfigurationAzureConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

---


### SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.putSubscriptions"></a>

```csharp
private void PutSubscriptions(IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]

---

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resetSubscriptions"></a>

```csharp
private void ResetSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptions"></a>

```csharp
public SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList Subscriptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList</a>

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptionsInput"></a>

```csharp
public IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[] SubscriptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

---


### SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.get"></a>

```csharp
private SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.internalValue"></a>

```csharp
public IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>[]

---


### SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>

---


### SsmCloudConnectorConfigurationOutputReference <a name="SsmCloudConnectorConfigurationOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.putAzureConfiguration">PutAzureConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureConfiguration` <a name="PutAzureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.putAzureConfiguration"></a>

```csharp
private void PutAzureConfiguration(SsmCloudConnectorConfigurationAzureConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.putAzureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfiguration">AzureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference">SsmCloudConnectorConfigurationAzureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfigurationInput">AzureConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureConfiguration`<sup>Required</sup> <a name="AzureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfiguration"></a>

```csharp
public SsmCloudConnectorConfigurationAzureConfigurationOutputReference AzureConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference">SsmCloudConnectorConfigurationAzureConfigurationOutputReference</a>

---

##### `AzureConfigurationInput`<sup>Optional</sup> <a name="AzureConfigurationInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfigurationInput"></a>

```csharp
public IResolvable|SsmCloudConnectorConfigurationAzureConfiguration AzureConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmCloudConnectorConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

---


### SsmCloudConnectorTagsList <a name="SsmCloudConnectorTagsList" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.get"></a>

```csharp
private SsmCloudConnectorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.internalValue"></a>

```csharp
public IResolvable|SsmCloudConnectorTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>[]

---


### SsmCloudConnectorTagsOutputReference <a name="SsmCloudConnectorTagsOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmCloudConnectorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmCloudConnectorTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>

---



