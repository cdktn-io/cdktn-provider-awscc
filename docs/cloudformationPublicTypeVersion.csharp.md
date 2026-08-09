# `cloudformationPublicTypeVersion` Submodule <a name="`cloudformationPublicTypeVersion` Submodule" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationPublicTypeVersion <a name="CloudformationPublicTypeVersion" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_public_type_version awscc_cloudformation_public_type_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationPublicTypeVersion(Construct Scope, string Id, CloudformationPublicTypeVersionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig">CloudformationPublicTypeVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig">CloudformationPublicTypeVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetLogDeliveryBucket">ResetLogDeliveryBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetPublicVersionNumber">ResetPublicVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetTypeName">ResetTypeName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetLogDeliveryBucket` <a name="ResetLogDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetLogDeliveryBucket"></a>

```csharp
private void ResetLogDeliveryBucket()
```

##### `ResetPublicVersionNumber` <a name="ResetPublicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetPublicVersionNumber"></a>

```csharp
private void ResetPublicVersionNumber()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationPublicTypeVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationPublicTypeVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationPublicTypeVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationPublicTypeVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudformationPublicTypeVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudformationPublicTypeVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationPublicTypeVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationPublicTypeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_public_type_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationPublicTypeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicTypeArn">PublicTypeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publisherId">PublisherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeVersionArn">TypeVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucketInput">LogDeliveryBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumberInput">PublicVersionNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucket">LogDeliveryBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumber">PublicVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PublicTypeArn`<sup>Required</sup> <a name="PublicTypeArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicTypeArn"></a>

```csharp
public string PublicTypeArn { get; }
```

- *Type:* string

---

##### `PublisherId`<sup>Required</sup> <a name="PublisherId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publisherId"></a>

```csharp
public string PublisherId { get; }
```

- *Type:* string

---

##### `TypeVersionArn`<sup>Required</sup> <a name="TypeVersionArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeVersionArn"></a>

```csharp
public string TypeVersionArn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `LogDeliveryBucketInput`<sup>Optional</sup> <a name="LogDeliveryBucketInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucketInput"></a>

```csharp
public string LogDeliveryBucketInput { get; }
```

- *Type:* string

---

##### `PublicVersionNumberInput`<sup>Optional</sup> <a name="PublicVersionNumberInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumberInput"></a>

```csharp
public string PublicVersionNumberInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `LogDeliveryBucket`<sup>Required</sup> <a name="LogDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucket"></a>

```csharp
public string LogDeliveryBucket { get; }
```

- *Type:* string

---

##### `PublicVersionNumber`<sup>Required</sup> <a name="PublicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumber"></a>

```csharp
public string PublicVersionNumber { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationPublicTypeVersionConfig <a name="CloudformationPublicTypeVersionConfig" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudformationPublicTypeVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Arn = null,
    string LogDeliveryBucket = null,
    string PublicVersionNumber = null,
    string Type = null,
    string TypeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.arn">Arn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) of the extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.logDeliveryBucket">LogDeliveryBucket</a></code> | <code>string</code> | A url to the S3 bucket where logs for the testType run will be available. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.publicVersionNumber">PublicVersionNumber</a></code> | <code>string</code> | The version number of a public third-party extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.type">Type</a></code> | <code>string</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.typeName">TypeName</a></code> | <code>string</code> | The name of the type being registered. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The Amazon Resource Number (ARN) of the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_public_type_version#arn CloudformationPublicTypeVersion#arn}

---

##### `LogDeliveryBucket`<sup>Optional</sup> <a name="LogDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.logDeliveryBucket"></a>

```csharp
public string LogDeliveryBucket { get; set; }
```

- *Type:* string

A url to the S3 bucket where logs for the testType run will be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_public_type_version#log_delivery_bucket CloudformationPublicTypeVersion#log_delivery_bucket}

---

##### `PublicVersionNumber`<sup>Optional</sup> <a name="PublicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.publicVersionNumber"></a>

```csharp
public string PublicVersionNumber { get; set; }
```

- *Type:* string

The version number of a public third-party extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_public_type_version#public_version_number CloudformationPublicTypeVersion#public_version_number}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_public_type_version#type CloudformationPublicTypeVersion#type}

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_public_type_version#type_name CloudformationPublicTypeVersion#type_name}

---



