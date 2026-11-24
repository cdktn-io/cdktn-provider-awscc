# `apiportalPortal` Submodule <a name="`apiportalPortal` Submodule" id="@cdktn/provider-awscc.apiportalPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalPortal <a name="ApiportalPortal" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal awscc_apiportal_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortal(Construct Scope, string Id, ApiportalPortalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig">ApiportalPortalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig">ApiportalPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent">PutPortalContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetIncludedProductArns">ResetIncludedProductArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetLogoUri">ResetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetRumAppMonitorName">ResetRumAppMonitorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization"></a>

```csharp
private void PutAuthorization(ApiportalPortalAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration"></a>

```csharp
private void PutEndpointConfiguration(ApiportalPortalEndpointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---

##### `PutPortalContent` <a name="PutPortalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent"></a>

```csharp
private void PutPortalContent(ApiportalPortalPortalContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags"></a>

```csharp
private void PutTags(IResolvable|ApiportalPortalTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]

---

##### `ResetIncludedProductArns` <a name="ResetIncludedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetIncludedProductArns"></a>

```csharp
private void ResetIncludedProductArns()
```

##### `ResetLogoUri` <a name="ResetLogoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetLogoUri"></a>

```csharp
private void ResetLogoUri()
```

##### `ResetRumAppMonitorName` <a name="ResetRumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetRumAppMonitorName"></a>

```csharp
private void ResetRumAppMonitorName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalPortal resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalPortal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalPortal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalPortal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApiportalPortal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiportalPortal resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiportalPortal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiportalPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference">ApiportalPortalAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference">ApiportalPortalEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalArn">PortalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContent">PortalContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference">ApiportalPortalPortalContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalId">PortalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishDescription">PublishDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishedAt">PublishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishStatus">PublishStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.statusException">StatusException</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference">ApiportalPortalStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList">ApiportalPortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorizationInput">AuthorizationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArnsInput">IncludedProductArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUriInput">LogoUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContentInput">PortalContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorNameInput">RumAppMonitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArns">IncludedProductArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUri">LogoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorName">RumAppMonitorName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorization"></a>

```csharp
public ApiportalPortalAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference">ApiportalPortalAuthorizationOutputReference</a>

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfiguration"></a>

```csharp
public ApiportalPortalEndpointConfigurationOutputReference EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference">ApiportalPortalEndpointConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PortalArn`<sup>Required</sup> <a name="PortalArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalArn"></a>

```csharp
public string PortalArn { get; }
```

- *Type:* string

---

##### `PortalContent`<sup>Required</sup> <a name="PortalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContent"></a>

```csharp
public ApiportalPortalPortalContentOutputReference PortalContent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference">ApiportalPortalPortalContentOutputReference</a>

---

##### `PortalId`<sup>Required</sup> <a name="PortalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalId"></a>

```csharp
public string PortalId { get; }
```

- *Type:* string

---

##### `PublishDescription`<sup>Required</sup> <a name="PublishDescription" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishDescription"></a>

```csharp
public string PublishDescription { get; }
```

- *Type:* string

---

##### `PublishedAt`<sup>Required</sup> <a name="PublishedAt" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishedAt"></a>

```csharp
public string PublishedAt { get; }
```

- *Type:* string

---

##### `PublishStatus`<sup>Required</sup> <a name="PublishStatus" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishStatus"></a>

```csharp
public string PublishStatus { get; }
```

- *Type:* string

---

##### `StatusException`<sup>Required</sup> <a name="StatusException" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.statusException"></a>

```csharp
public ApiportalPortalStatusExceptionOutputReference StatusException { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference">ApiportalPortalStatusExceptionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tags"></a>

```csharp
public ApiportalPortalTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList">ApiportalPortalTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorizationInput"></a>

```csharp
public IResolvable|ApiportalPortalAuthorization AuthorizationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfigurationInput"></a>

```csharp
public IResolvable|ApiportalPortalEndpointConfiguration EndpointConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---

##### `IncludedProductArnsInput`<sup>Optional</sup> <a name="IncludedProductArnsInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArnsInput"></a>

```csharp
public string[] IncludedProductArnsInput { get; }
```

- *Type:* string[]

---

##### `LogoUriInput`<sup>Optional</sup> <a name="LogoUriInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUriInput"></a>

```csharp
public string LogoUriInput { get; }
```

- *Type:* string

---

##### `PortalContentInput`<sup>Optional</sup> <a name="PortalContentInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContentInput"></a>

```csharp
public IResolvable|ApiportalPortalPortalContent PortalContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---

##### `RumAppMonitorNameInput`<sup>Optional</sup> <a name="RumAppMonitorNameInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorNameInput"></a>

```csharp
public string RumAppMonitorNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tagsInput"></a>

```csharp
public IResolvable|ApiportalPortalTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]

---

##### `IncludedProductArns`<sup>Required</sup> <a name="IncludedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArns"></a>

```csharp
public string[] IncludedProductArns { get; }
```

- *Type:* string[]

---

##### `LogoUri`<sup>Required</sup> <a name="LogoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUri"></a>

```csharp
public string LogoUri { get; }
```

- *Type:* string

---

##### `RumAppMonitorName`<sup>Required</sup> <a name="RumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorName"></a>

```csharp
public string RumAppMonitorName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalPortalAuthorization <a name="ApiportalPortalAuthorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalAuthorization {
    ApiportalPortalAuthorizationAuthorizationConfig AuthorizationConfig,
    string FineGrainedAccessControl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.fineGrainedAccessControl">FineGrainedAccessControl</a></code> | <code>string</code> | Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly. |

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.authorizationConfig"></a>

```csharp
public ApiportalPortalAuthorizationAuthorizationConfig AuthorizationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization_config ApiportalPortal#authorization_config}

---

##### `FineGrainedAccessControl`<sup>Required</sup> <a name="FineGrainedAccessControl" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.fineGrainedAccessControl"></a>

```csharp
public string FineGrainedAccessControl { get; set; }
```

- *Type:* string

Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#fine_grained_access_control ApiportalPortal#fine_grained_access_control}

---

### ApiportalPortalAuthorizationAuthorizationConfig <a name="ApiportalPortalAuthorizationAuthorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalAuthorizationAuthorizationConfig {
    ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig CognitoConfig = null,
    string None = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.cognitoConfig">CognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | The configuration for using Amazon Cognito user pools to control access to your portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.none">None</a></code> | <code>string</code> | Provide no authorization for your portal. This makes your portal publicly accessible on the web. |

---

##### `CognitoConfig`<sup>Optional</sup> <a name="CognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.cognitoConfig"></a>

```csharp
public ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig CognitoConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

The configuration for using Amazon Cognito user pools to control access to your portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#cognito_config ApiportalPortal#cognito_config}

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.none"></a>

```csharp
public string None { get; set; }
```

- *Type:* string

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---

### ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig <a name="ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig {
    string AppClientId = null,
    string UserPoolArn = null,
    string UserPoolDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.appClientId">AppClientId</a></code> | <code>string</code> | The app client ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | The user pool ARN. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolDomain">UserPoolDomain</a></code> | <code>string</code> | The user pool domain. |

---

##### `AppClientId`<sup>Optional</sup> <a name="AppClientId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.appClientId"></a>

```csharp
public string AppClientId { get; set; }
```

- *Type:* string

The app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#app_client_id ApiportalPortal#app_client_id}

---

##### `UserPoolArn`<sup>Optional</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; set; }
```

- *Type:* string

The user pool ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_arn ApiportalPortal#user_pool_arn}

---

##### `UserPoolDomain`<sup>Optional</sup> <a name="UserPoolDomain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolDomain"></a>

```csharp
public string UserPoolDomain { get; set; }
```

- *Type:* string

The user pool domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_domain ApiportalPortal#user_pool_domain}

---

### ApiportalPortalConfig <a name="ApiportalPortalConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ApiportalPortalAuthorization Authorization,
    ApiportalPortalEndpointConfiguration EndpointConfiguration,
    ApiportalPortalPortalContent PortalContent,
    string[] IncludedProductArns = null,
    string LogoUri = null,
    string RumAppMonitorName = null,
    IResolvable|ApiportalPortalTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | Represents an authorization configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | Represents an endpoint configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.portalContent">PortalContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | Contains the content that is visible to portal consumers including the themes, display names, and description. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.includedProductArns">IncludedProductArns</a></code> | <code>string[]</code> | The ARNs of the products included in the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.logoUri">LogoUri</a></code> | <code>string</code> | The logo URI. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.rumAppMonitorName">RumAppMonitorName</a></code> | <code>string</code> | The name of the Amazon CloudWatch RUM app monitor. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]</code> | The tags associated with a portal. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.authorization"></a>

```csharp
public ApiportalPortalAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

Represents an authorization configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization ApiportalPortal#authorization}

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.endpointConfiguration"></a>

```csharp
public ApiportalPortalEndpointConfiguration EndpointConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

Represents an endpoint configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#endpoint_configuration ApiportalPortal#endpoint_configuration}

---

##### `PortalContent`<sup>Required</sup> <a name="PortalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.portalContent"></a>

```csharp
public ApiportalPortalPortalContent PortalContent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

Contains the content that is visible to portal consumers including the themes, display names, and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#portal_content ApiportalPortal#portal_content}

---

##### `IncludedProductArns`<sup>Optional</sup> <a name="IncludedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.includedProductArns"></a>

```csharp
public string[] IncludedProductArns { get; set; }
```

- *Type:* string[]

The ARNs of the products included in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#included_product_arns ApiportalPortal#included_product_arns}

---

##### `LogoUri`<sup>Optional</sup> <a name="LogoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.logoUri"></a>

```csharp
public string LogoUri { get; set; }
```

- *Type:* string

The logo URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#logo_uri ApiportalPortal#logo_uri}

---

##### `RumAppMonitorName`<sup>Optional</sup> <a name="RumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.rumAppMonitorName"></a>

```csharp
public string RumAppMonitorName { get; set; }
```

- *Type:* string

The name of the Amazon CloudWatch RUM app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#rum_app_monitor_name ApiportalPortal#rum_app_monitor_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.tags"></a>

```csharp
public IResolvable|ApiportalPortalTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]

The tags associated with a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#tags ApiportalPortal#tags}

---

### ApiportalPortalEndpointConfiguration <a name="ApiportalPortalEndpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalEndpointConfiguration {
    ApiportalPortalEndpointConfigurationAcmManaged AcmManaged = null,
    string None = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.acmManaged">AcmManaged</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | Represents a domain name and certificate for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.none">None</a></code> | <code>string</code> | Provide no authorization for your portal. This makes your portal publicly accessible on the web. |

---

##### `AcmManaged`<sup>Optional</sup> <a name="AcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.acmManaged"></a>

```csharp
public ApiportalPortalEndpointConfigurationAcmManaged AcmManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

Represents a domain name and certificate for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#acm_managed ApiportalPortal#acm_managed}

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.none"></a>

```csharp
public string None { get; set; }
```

- *Type:* string

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---

### ApiportalPortalEndpointConfigurationAcmManaged <a name="ApiportalPortalEndpointConfigurationAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalEndpointConfigurationAcmManaged {
    string CertificateArn = null,
    string DomainName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.certificateArn">CertificateArn</a></code> | <code>string</code> | The certificate ARN. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.domainName">DomainName</a></code> | <code>string</code> | The domain name. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

The certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#certificate_arn ApiportalPortal#certificate_arn}

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#domain_name ApiportalPortal#domain_name}

---

### ApiportalPortalPortalContent <a name="ApiportalPortalPortalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalPortalContent {
    string DisplayName,
    ApiportalPortalPortalContentTheme Theme,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.theme">Theme</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | Defines the theme for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.description">Description</a></code> | <code>string</code> | A description of the portal. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#display_name ApiportalPortal#display_name}

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.theme"></a>

```csharp
public ApiportalPortalPortalContentTheme Theme { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

Defines the theme for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#theme ApiportalPortal#theme}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#description ApiportalPortal#description}

---

### ApiportalPortalPortalContentTheme <a name="ApiportalPortalPortalContentTheme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalPortalContentTheme {
    ApiportalPortalPortalContentThemeCustomColors CustomColors
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.property.customColors">CustomColors</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | Represents custom colors for a published portal. |

---

##### `CustomColors`<sup>Required</sup> <a name="CustomColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.property.customColors"></a>

```csharp
public ApiportalPortalPortalContentThemeCustomColors CustomColors { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

Represents custom colors for a published portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#custom_colors ApiportalPortal#custom_colors}

---

### ApiportalPortalPortalContentThemeCustomColors <a name="ApiportalPortalPortalContentThemeCustomColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalPortalContentThemeCustomColors {
    string AccentColor,
    string BackgroundColor,
    string ErrorValidationColor,
    string HeaderColor,
    string NavigationColor,
    string TextColor
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.accentColor">AccentColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.errorValidationColor">ErrorValidationColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.headerColor">HeaderColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.navigationColor">NavigationColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.textColor">TextColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}. |

---

##### `AccentColor`<sup>Required</sup> <a name="AccentColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.accentColor"></a>

```csharp
public string AccentColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}.

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}.

---

##### `ErrorValidationColor`<sup>Required</sup> <a name="ErrorValidationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.errorValidationColor"></a>

```csharp
public string ErrorValidationColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}.

---

##### `HeaderColor`<sup>Required</sup> <a name="HeaderColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.headerColor"></a>

```csharp
public string HeaderColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}.

---

##### `NavigationColor`<sup>Required</sup> <a name="NavigationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.navigationColor"></a>

```csharp
public string NavigationColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}.

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.textColor"></a>

```csharp
public string TextColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}.

---

### ApiportalPortalStatusException <a name="ApiportalPortalStatusException" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalStatusException {

};
```


### ApiportalPortalTags <a name="ApiportalPortalTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#key ApiportalPortal#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#value ApiportalPortal#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#key ApiportalPortal#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#value ApiportalPortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference <a name="ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetAppClientId">ResetAppClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolArn">ResetUserPoolArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolDomain">ResetUserPoolDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppClientId` <a name="ResetAppClientId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetAppClientId"></a>

```csharp
private void ResetAppClientId()
```

##### `ResetUserPoolArn` <a name="ResetUserPoolArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolArn"></a>

```csharp
private void ResetUserPoolArn()
```

##### `ResetUserPoolDomain` <a name="ResetUserPoolDomain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolDomain"></a>

```csharp
private void ResetUserPoolDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientIdInput">AppClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArnInput">UserPoolArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomainInput">UserPoolDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId">AppClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppClientIdInput`<sup>Optional</sup> <a name="AppClientIdInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientIdInput"></a>

```csharp
public string AppClientIdInput { get; }
```

- *Type:* string

---

##### `UserPoolArnInput`<sup>Optional</sup> <a name="UserPoolArnInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArnInput"></a>

```csharp
public string UserPoolArnInput { get; }
```

- *Type:* string

---

##### `UserPoolDomainInput`<sup>Optional</sup> <a name="UserPoolDomainInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```csharp
public string UserPoolDomainInput { get; }
```

- *Type:* string

---

##### `AppClientId`<sup>Required</sup> <a name="AppClientId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId"></a>

```csharp
public string AppClientId { get; }
```

- *Type:* string

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; }
```

- *Type:* string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain"></a>

```csharp
public string UserPoolDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---


### ApiportalPortalAuthorizationAuthorizationConfigOutputReference <a name="ApiportalPortalAuthorizationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalAuthorizationAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig">PutCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetCognitoConfig">ResetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetNone">ResetNone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCognitoConfig` <a name="PutCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig"></a>

```csharp
private void PutCognitoConfig(ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---

##### `ResetCognitoConfig` <a name="ResetCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetCognitoConfig"></a>

```csharp
private void ResetCognitoConfig()
```

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetNone"></a>

```csharp
private void ResetNone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig">CognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfigInput">CognitoConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.noneInput">NoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none">None</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CognitoConfig`<sup>Required</sup> <a name="CognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig"></a>

```csharp
public ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference CognitoConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a>

---

##### `CognitoConfigInput`<sup>Optional</sup> <a name="CognitoConfigInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfigInput"></a>

```csharp
public IResolvable|ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig CognitoConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.noneInput"></a>

```csharp
public string NoneInput { get; }
```

- *Type:* string

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none"></a>

```csharp
public string None { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalAuthorizationAuthorizationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---


### ApiportalPortalAuthorizationOutputReference <a name="ApiportalPortalAuthorizationOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig"></a>

```csharp
private void PutAuthorizationConfig(ApiportalPortalAuthorizationAuthorizationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControlInput">FineGrainedAccessControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl">FineGrainedAccessControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfig"></a>

```csharp
public ApiportalPortalAuthorizationAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfigInput"></a>

```csharp
public IResolvable|ApiportalPortalAuthorizationAuthorizationConfig AuthorizationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---

##### `FineGrainedAccessControlInput`<sup>Optional</sup> <a name="FineGrainedAccessControlInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControlInput"></a>

```csharp
public string FineGrainedAccessControlInput { get; }
```

- *Type:* string

---

##### `FineGrainedAccessControl`<sup>Required</sup> <a name="FineGrainedAccessControl" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl"></a>

```csharp
public string FineGrainedAccessControl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalAuthorization InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---


### ApiportalPortalEndpointConfigurationAcmManagedOutputReference <a name="ApiportalPortalEndpointConfigurationAcmManagedOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalEndpointConfigurationAcmManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetDomainName">ResetDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetDomainName"></a>

```csharp
private void ResetDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalEndpointConfigurationAcmManaged InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---


### ApiportalPortalEndpointConfigurationOutputReference <a name="ApiportalPortalEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged">PutAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetAcmManaged">ResetAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetNone">ResetNone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcmManaged` <a name="PutAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged"></a>

```csharp
private void PutAcmManaged(ApiportalPortalEndpointConfigurationAcmManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---

##### `ResetAcmManaged` <a name="ResetAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetAcmManaged"></a>

```csharp
private void ResetAcmManaged()
```

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetNone"></a>

```csharp
private void ResetNone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManaged">AcmManaged</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference">ApiportalPortalEndpointConfigurationAcmManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName">PortalDefaultDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId">PortalDomainHostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManagedInput">AcmManagedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.noneInput">NoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.none">None</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcmManaged`<sup>Required</sup> <a name="AcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManaged"></a>

```csharp
public ApiportalPortalEndpointConfigurationAcmManagedOutputReference AcmManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference">ApiportalPortalEndpointConfigurationAcmManagedOutputReference</a>

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `PortalDefaultDomainName`<sup>Required</sup> <a name="PortalDefaultDomainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName"></a>

```csharp
public string PortalDefaultDomainName { get; }
```

- *Type:* string

---

##### `PortalDomainHostedZoneId`<sup>Required</sup> <a name="PortalDomainHostedZoneId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId"></a>

```csharp
public string PortalDomainHostedZoneId { get; }
```

- *Type:* string

---

##### `AcmManagedInput`<sup>Optional</sup> <a name="AcmManagedInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManagedInput"></a>

```csharp
public IResolvable|ApiportalPortalEndpointConfigurationAcmManaged AcmManagedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.noneInput"></a>

```csharp
public string NoneInput { get; }
```

- *Type:* string

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.none"></a>

```csharp
public string None { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalEndpointConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---


### ApiportalPortalPortalContentOutputReference <a name="ApiportalPortalPortalContentOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalPortalContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme">PutTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTheme` <a name="PutTheme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme"></a>

```csharp
private void PutTheme(ApiportalPortalPortalContentTheme Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.theme">Theme</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference">ApiportalPortalPortalContentThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.themeInput">ThemeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.theme"></a>

```csharp
public ApiportalPortalPortalContentThemeOutputReference Theme { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference">ApiportalPortalPortalContentThemeOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ThemeInput`<sup>Optional</sup> <a name="ThemeInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.themeInput"></a>

```csharp
public IResolvable|ApiportalPortalPortalContentTheme ThemeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalPortalContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---


### ApiportalPortalPortalContentThemeCustomColorsOutputReference <a name="ApiportalPortalPortalContentThemeCustomColorsOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalPortalContentThemeCustomColorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColorInput">AccentColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColorInput">ErrorValidationColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColorInput">HeaderColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColorInput">NavigationColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColorInput">TextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor">AccentColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor">ErrorValidationColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor">HeaderColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor">NavigationColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccentColorInput`<sup>Optional</sup> <a name="AccentColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColorInput"></a>

```csharp
public string AccentColorInput { get; }
```

- *Type:* string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `ErrorValidationColorInput`<sup>Optional</sup> <a name="ErrorValidationColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColorInput"></a>

```csharp
public string ErrorValidationColorInput { get; }
```

- *Type:* string

---

##### `HeaderColorInput`<sup>Optional</sup> <a name="HeaderColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColorInput"></a>

```csharp
public string HeaderColorInput { get; }
```

- *Type:* string

---

##### `NavigationColorInput`<sup>Optional</sup> <a name="NavigationColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColorInput"></a>

```csharp
public string NavigationColorInput { get; }
```

- *Type:* string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColorInput"></a>

```csharp
public string TextColorInput { get; }
```

- *Type:* string

---

##### `AccentColor`<sup>Required</sup> <a name="AccentColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor"></a>

```csharp
public string AccentColor { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `ErrorValidationColor`<sup>Required</sup> <a name="ErrorValidationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor"></a>

```csharp
public string ErrorValidationColor { get; }
```

- *Type:* string

---

##### `HeaderColor`<sup>Required</sup> <a name="HeaderColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor"></a>

```csharp
public string HeaderColor { get; }
```

- *Type:* string

---

##### `NavigationColor`<sup>Required</sup> <a name="NavigationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor"></a>

```csharp
public string NavigationColor { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalPortalContentThemeCustomColors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---


### ApiportalPortalPortalContentThemeOutputReference <a name="ApiportalPortalPortalContentThemeOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalPortalContentThemeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors">PutCustomColors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomColors` <a name="PutCustomColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors"></a>

```csharp
private void PutCustomColors(ApiportalPortalPortalContentThemeCustomColors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColors">CustomColors</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference">ApiportalPortalPortalContentThemeCustomColorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt">LogoUploadedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColorsInput">CustomColorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomColors`<sup>Required</sup> <a name="CustomColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColors"></a>

```csharp
public ApiportalPortalPortalContentThemeCustomColorsOutputReference CustomColors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference">ApiportalPortalPortalContentThemeCustomColorsOutputReference</a>

---

##### `LogoUploadedAt`<sup>Required</sup> <a name="LogoUploadedAt" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt"></a>

```csharp
public string LogoUploadedAt { get; }
```

- *Type:* string

---

##### `CustomColorsInput`<sup>Optional</sup> <a name="CustomColorsInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColorsInput"></a>

```csharp
public IResolvable|ApiportalPortalPortalContentThemeCustomColors CustomColorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalPortalContentTheme InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---


### ApiportalPortalStatusExceptionOutputReference <a name="ApiportalPortalStatusExceptionOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalStatusExceptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.exception">Exception</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException">ApiportalPortalStatusException</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exception`<sup>Required</sup> <a name="Exception" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.exception"></a>

```csharp
public string Exception { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.internalValue"></a>

```csharp
public ApiportalPortalStatusException InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException">ApiportalPortalStatusException</a>

---


### ApiportalPortalTagsList <a name="ApiportalPortalTagsList" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get"></a>

```csharp
private ApiportalPortalTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]

---


### ApiportalPortalTagsOutputReference <a name="ApiportalPortalTagsOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApiportalPortalTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiportalPortalTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>

---



