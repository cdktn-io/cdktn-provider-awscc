# `sagemakerProject` Submodule <a name="`sagemakerProject` Submodule" id="@cdktn/provider-awscc.sagemakerProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerProject <a name="SagemakerProject" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project awscc_sagemaker_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProject(Construct Scope, string Id, SagemakerProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig">SagemakerProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig">SagemakerProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails">PutServiceCatalogProvisionedProductDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails">PutServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTemplateProviderDetails">PutTemplateProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetProjectDescription">ResetProjectDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisionedProductDetails">ResetServiceCatalogProvisionedProductDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisioningDetails">ResetServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTemplateProviderDetails">ResetTemplateProviderDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServiceCatalogProvisionedProductDetails` <a name="PutServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails"></a>

```csharp
private void PutServiceCatalogProvisionedProductDetails(SagemakerProjectServiceCatalogProvisionedProductDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisionedProductDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

---

##### `PutServiceCatalogProvisioningDetails` <a name="PutServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails"></a>

```csharp
private void PutServiceCatalogProvisioningDetails(SagemakerProjectServiceCatalogProvisioningDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerProjectTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>[]

---

##### `PutTemplateProviderDetails` <a name="PutTemplateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTemplateProviderDetails"></a>

```csharp
private void PutTemplateProviderDetails(IResolvable|SagemakerProjectTemplateProviderDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.putTemplateProviderDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>[]

---

##### `ResetProjectDescription` <a name="ResetProjectDescription" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetProjectDescription"></a>

```csharp
private void ResetProjectDescription()
```

##### `ResetServiceCatalogProvisionedProductDetails` <a name="ResetServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisionedProductDetails"></a>

```csharp
private void ResetServiceCatalogProvisionedProductDetails()
```

##### `ResetServiceCatalogProvisioningDetails` <a name="ResetServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetServiceCatalogProvisioningDetails"></a>

```csharp
private void ResetServiceCatalogProvisioningDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateProviderDetails` <a name="ResetTemplateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.resetTemplateProviderDetails"></a>

```csharp
private void ResetTemplateProviderDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerProject resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerProject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerProject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerProject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerProject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerProject resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerProject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectArn">ProjectArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectStatus">ProjectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetails">ServiceCatalogProvisionedProductDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails">ServiceCatalogProvisioningDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList">SagemakerProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetails">TemplateProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList">SagemakerProjectTemplateProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescriptionInput">ProjectDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectNameInput">ProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetailsInput">ServiceCatalogProvisionedProductDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput">ServiceCatalogProvisioningDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetailsInput">TemplateProviderDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescription">ProjectDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectArn`<sup>Required</sup> <a name="ProjectArn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectArn"></a>

```csharp
public string ProjectArn { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProjectStatus`<sup>Required</sup> <a name="ProjectStatus" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectStatus"></a>

```csharp
public string ProjectStatus { get; }
```

- *Type:* string

---

##### `ServiceCatalogProvisionedProductDetails`<sup>Required</sup> <a name="ServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetails"></a>

```csharp
public SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference ServiceCatalogProvisionedProductDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a>

---

##### `ServiceCatalogProvisioningDetails`<sup>Required</sup> <a name="ServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails"></a>

```csharp
public SagemakerProjectServiceCatalogProvisioningDetailsOutputReference ServiceCatalogProvisioningDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tags"></a>

```csharp
public SagemakerProjectTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList">SagemakerProjectTagsList</a>

---

##### `TemplateProviderDetails`<sup>Required</sup> <a name="TemplateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetails"></a>

```csharp
public SagemakerProjectTemplateProviderDetailsList TemplateProviderDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList">SagemakerProjectTemplateProviderDetailsList</a>

---

##### `ProjectDescriptionInput`<sup>Optional</sup> <a name="ProjectDescriptionInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescriptionInput"></a>

```csharp
public string ProjectDescriptionInput { get; }
```

- *Type:* string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectNameInput"></a>

```csharp
public string ProjectNameInput { get; }
```

- *Type:* string

---

##### `ServiceCatalogProvisionedProductDetailsInput`<sup>Optional</sup> <a name="ServiceCatalogProvisionedProductDetailsInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisionedProductDetailsInput"></a>

```csharp
public IResolvable|SagemakerProjectServiceCatalogProvisionedProductDetails ServiceCatalogProvisionedProductDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

---

##### `ServiceCatalogProvisioningDetailsInput`<sup>Optional</sup> <a name="ServiceCatalogProvisioningDetailsInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput"></a>

```csharp
public IResolvable|SagemakerProjectServiceCatalogProvisioningDetails ServiceCatalogProvisioningDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerProjectTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>[]

---

##### `TemplateProviderDetailsInput`<sup>Optional</sup> <a name="TemplateProviderDetailsInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.templateProviderDetailsInput"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetails[] TemplateProviderDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>[]

---

##### `ProjectDescription`<sup>Required</sup> <a name="ProjectDescription" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectDescription"></a>

```csharp
public string ProjectDescription { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerProjectConfig <a name="SagemakerProjectConfig" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ProjectName,
    string ProjectDescription = null,
    SagemakerProjectServiceCatalogProvisionedProductDetails ServiceCatalogProvisionedProductDetails = null,
    SagemakerProjectServiceCatalogProvisioningDetails ServiceCatalogProvisioningDetails = null,
    IResolvable|SagemakerProjectTags[] Tags = null,
    IResolvable|SagemakerProjectTemplateProviderDetails[] TemplateProviderDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectName">ProjectName</a></code> | <code>string</code> | The name of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectDescription">ProjectDescription</a></code> | <code>string</code> | The description of the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisionedProductDetails">ServiceCatalogProvisionedProductDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | Provisioned ServiceCatalog  Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails">ServiceCatalogProvisioningDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | Input ServiceCatalog Provisioning Details. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.templateProviderDetails">TemplateProviderDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>[]</code> | An array of template providers associated with the project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectName"></a>

```csharp
public string ProjectName { get; set; }
```

- *Type:* string

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#project_name SagemakerProject#project_name}

---

##### `ProjectDescription`<sup>Optional</sup> <a name="ProjectDescription" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.projectDescription"></a>

```csharp
public string ProjectDescription { get; set; }
```

- *Type:* string

The description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#project_description SagemakerProject#project_description}

---

##### `ServiceCatalogProvisionedProductDetails`<sup>Optional</sup> <a name="ServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisionedProductDetails"></a>

```csharp
public SagemakerProjectServiceCatalogProvisionedProductDetails ServiceCatalogProvisionedProductDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

Provisioned ServiceCatalog  Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#service_catalog_provisioned_product_details SagemakerProject#service_catalog_provisioned_product_details}

---

##### `ServiceCatalogProvisioningDetails`<sup>Optional</sup> <a name="ServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails"></a>

```csharp
public SagemakerProjectServiceCatalogProvisioningDetails ServiceCatalogProvisioningDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

Input ServiceCatalog Provisioning Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerProjectTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#tags SagemakerProject#tags}

---

##### `TemplateProviderDetails`<sup>Optional</sup> <a name="TemplateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectConfig.property.templateProviderDetails"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetails[] TemplateProviderDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>[]

An array of template providers associated with the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#template_provider_details SagemakerProject#template_provider_details}

---

### SagemakerProjectServiceCatalogProvisionedProductDetails <a name="SagemakerProjectServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectServiceCatalogProvisionedProductDetails {
    string ProvisionedProductId = null,
    string ProvisionedProductStatusMessage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductId">ProvisionedProductId</a></code> | <code>string</code> | The identifier of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductStatusMessage">ProvisionedProductStatusMessage</a></code> | <code>string</code> | Provisioned Product Status Message. |

---

##### `ProvisionedProductId`<sup>Optional</sup> <a name="ProvisionedProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductId"></a>

```csharp
public string ProvisionedProductId { get; set; }
```

- *Type:* string

The identifier of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#provisioned_product_id SagemakerProject#provisioned_product_id}

---

##### `ProvisionedProductStatusMessage`<sup>Optional</sup> <a name="ProvisionedProductStatusMessage" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails.property.provisionedProductStatusMessage"></a>

```csharp
public string ProvisionedProductStatusMessage { get; set; }
```

- *Type:* string

Provisioned Product Status Message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#provisioned_product_status_message SagemakerProject#provisioned_product_status_message}

---

### SagemakerProjectServiceCatalogProvisioningDetails <a name="SagemakerProjectServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectServiceCatalogProvisioningDetails {
    string PathId = null,
    string ProductId = null,
    string ProvisioningArtifactId = null,
    IResolvable|SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters[] ProvisioningParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId">PathId</a></code> | <code>string</code> | The path identifier of the product. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId">ProductId</a></code> | <code>string</code> | Service Catalog product identifier. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>string</code> | The identifier of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameters">ProvisioningParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>[]</code> | Parameters specified by the administrator that are required for provisioning the product. |

---

##### `PathId`<sup>Optional</sup> <a name="PathId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId"></a>

```csharp
public string PathId { get; set; }
```

- *Type:* string

The path identifier of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#path_id SagemakerProject#path_id}

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Service Catalog product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#product_id SagemakerProject#product_id}

---

##### `ProvisioningArtifactId`<sup>Optional</sup> <a name="ProvisioningArtifactId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId"></a>

```csharp
public string ProvisioningArtifactId { get; set; }
```

- *Type:* string

The identifier of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}

---

##### `ProvisioningParameters`<sup>Optional</sup> <a name="ProvisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameters"></a>

```csharp
public IResolvable|SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters[] ProvisioningParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>[]

Parameters specified by the administrator that are required for provisioning the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#provisioning_parameters SagemakerProject#provisioning_parameters}

---

### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.key">Key</a></code> | <code>string</code> | The parameter key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.value">Value</a></code> | <code>string</code> | The parameter value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The parameter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#key SagemakerProject#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#value SagemakerProject#value}

---

### SagemakerProjectTags <a name="SagemakerProjectTags" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#key SagemakerProject#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#value SagemakerProject#value}

---

### SagemakerProjectTemplateProviderDetails <a name="SagemakerProjectTemplateProviderDetails" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTemplateProviderDetails {
    SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail CfnTemplateProviderDetail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails.property.cfnTemplateProviderDetail">CfnTemplateProviderDetail</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | CloudFormation template provider details for a SageMaker project. |

---

##### `CfnTemplateProviderDetail`<sup>Optional</sup> <a name="CfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails.property.cfnTemplateProviderDetail"></a>

```csharp
public SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail CfnTemplateProviderDetail { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

CloudFormation template provider details for a SageMaker project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#cfn_template_provider_detail SagemakerProject#cfn_template_provider_detail}

---

### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail {
    IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters[] Parameters = null,
    string RoleArn = null,
    string TemplateName = null,
    string TemplateUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>[]</code> | A list of parameters used in the CloudFormation template. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role used by the template provider. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateName">TemplateName</a></code> | <code>string</code> | The name of the template used for the project. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateUrl">TemplateUrl</a></code> | <code>string</code> | The URL of the CloudFormation template. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.parameters"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>[]

A list of parameters used in the CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#parameters SagemakerProject#parameters}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role used by the template provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#role_arn SagemakerProject#role_arn}

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

The name of the template used for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#template_name SagemakerProject#template_name}

---

##### `TemplateUrl`<sup>Optional</sup> <a name="TemplateUrl" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.property.templateUrl"></a>

```csharp
public string TemplateUrl { get; set; }
```

- *Type:* string

The URL of the CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#template_url SagemakerProject#template_url}

---

### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.key">Key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.value">Value</a></code> | <code>string</code> | The value of the parameter. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#key SagemakerProject#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_project#value SagemakerProject#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference <a name="SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductId">ResetProvisionedProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductStatusMessage">ResetProvisionedProductStatusMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProvisionedProductId` <a name="ResetProvisionedProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductId"></a>

```csharp
private void ResetProvisionedProductId()
```

##### `ResetProvisionedProductStatusMessage` <a name="ResetProvisionedProductStatusMessage" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resetProvisionedProductStatusMessage"></a>

```csharp
private void ResetProvisionedProductStatusMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductIdInput">ProvisionedProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessageInput">ProvisionedProductStatusMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId">ProvisionedProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage">ProvisionedProductStatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProvisionedProductIdInput`<sup>Optional</sup> <a name="ProvisionedProductIdInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductIdInput"></a>

```csharp
public string ProvisionedProductIdInput { get; }
```

- *Type:* string

---

##### `ProvisionedProductStatusMessageInput`<sup>Optional</sup> <a name="ProvisionedProductStatusMessageInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessageInput"></a>

```csharp
public string ProvisionedProductStatusMessageInput { get; }
```

- *Type:* string

---

##### `ProvisionedProductId`<sup>Required</sup> <a name="ProvisionedProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId"></a>

```csharp
public string ProvisionedProductId { get; }
```

- *Type:* string

---

##### `ProvisionedProductStatusMessage`<sup>Required</sup> <a name="ProvisionedProductStatusMessage" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage"></a>

```csharp
public string ProvisionedProductStatusMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectServiceCatalogProvisionedProductDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisionedProductDetails">SagemakerProjectServiceCatalogProvisionedProductDetails</a>

---


### SagemakerProjectServiceCatalogProvisioningDetailsOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectServiceCatalogProvisioningDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameters">PutProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId">ResetPathId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId">ResetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameters">ResetProvisioningParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProvisioningParameters` <a name="PutProvisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameters"></a>

```csharp
private void PutProvisioningParameters(IResolvable|SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>[]

---

##### `ResetPathId` <a name="ResetPathId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId"></a>

```csharp
private void ResetPathId()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProductId"></a>

```csharp
private void ResetProductId()
```

##### `ResetProvisioningArtifactId` <a name="ResetProvisioningArtifactId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId"></a>

```csharp
private void ResetProvisioningArtifactId()
```

##### `ResetProvisioningParameters` <a name="ResetProvisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameters"></a>

```csharp
private void ResetProvisioningParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters">ProvisioningParameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput">PathIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput">ProvisioningArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParametersInput">ProvisioningParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId">PathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProvisioningParameters`<sup>Required</sup> <a name="ProvisioningParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters"></a>

```csharp
public SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList ProvisioningParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a>

---

##### `PathIdInput`<sup>Optional</sup> <a name="PathIdInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput"></a>

```csharp
public string PathIdInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactIdInput`<sup>Optional</sup> <a name="ProvisioningArtifactIdInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput"></a>

```csharp
public string ProvisioningArtifactIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningParametersInput`<sup>Optional</sup> <a name="ProvisioningParametersInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParametersInput"></a>

```csharp
public IResolvable|SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters[] ProvisioningParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>[]

---

##### `PathId`<sup>Required</sup> <a name="PathId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId"></a>

```csharp
public string PathId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactId`<sup>Required</sup> <a name="ProvisioningArtifactId" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId"></a>

```csharp
public string ProvisioningArtifactId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectServiceCatalogProvisioningDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get"></a>

```csharp
private SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>[]

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>

---


### SagemakerProjectTagsList <a name="SagemakerProjectTagsList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.get"></a>

```csharp
private SagemakerProjectTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>[]

---


### SagemakerProjectTagsOutputReference <a name="SagemakerProjectTagsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTags">SagemakerProjectTags</a>

---


### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateName">ResetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateUrl">ResetTemplateUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>[]

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateName"></a>

```csharp
private void ResetTemplateName()
```

##### `ResetTemplateUrl` <a name="ResetTemplateUrl" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resetTemplateUrl"></a>

```csharp
private void ResetTemplateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrlInput">TemplateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl">TemplateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters"></a>

```csharp
public SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `TemplateUrlInput`<sup>Optional</sup> <a name="TemplateUrlInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrlInput"></a>

```csharp
public string TemplateUrlInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `TemplateUrl`<sup>Required</sup> <a name="TemplateUrl" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl"></a>

```csharp
public string TemplateUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---


### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get"></a>

```csharp
private SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>[]

---


### SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference <a name="SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>

---


### SagemakerProjectTemplateProviderDetailsList <a name="SagemakerProjectTemplateProviderDetailsList" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTemplateProviderDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.get"></a>

```csharp
private SagemakerProjectTemplateProviderDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>[]

---


### SagemakerProjectTemplateProviderDetailsOutputReference <a name="SagemakerProjectTemplateProviderDetailsOutputReference" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProjectTemplateProviderDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail">PutCfnTemplateProviderDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resetCfnTemplateProviderDetail">ResetCfnTemplateProviderDetail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCfnTemplateProviderDetail` <a name="PutCfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail"></a>

```csharp
private void PutCfnTemplateProviderDetail(SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.putCfnTemplateProviderDetail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---

##### `ResetCfnTemplateProviderDetail` <a name="ResetCfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.resetCfnTemplateProviderDetail"></a>

```csharp
private void ResetCfnTemplateProviderDetail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail">CfnTemplateProviderDetail</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetailInput">CfnTemplateProviderDetailInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CfnTemplateProviderDetail`<sup>Required</sup> <a name="CfnTemplateProviderDetail" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail"></a>

```csharp
public SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference CfnTemplateProviderDetail { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a>

---

##### `CfnTemplateProviderDetailInput`<sup>Optional</sup> <a name="CfnTemplateProviderDetailInput" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetailInput"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail CfnTemplateProviderDetailInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">SagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProjectTemplateProviderDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProject.SagemakerProjectTemplateProviderDetails">SagemakerProjectTemplateProviderDetails</a>

---



