# `apigatewayDomainNameAccessAssociation` Submodule <a name="`apigatewayDomainNameAccessAssociation` Submodule" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDomainNameAccessAssociation <a name="ApigatewayDomainNameAccessAssociation" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association awscc_apigateway_domain_name_access_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameAccessAssociation(Construct Scope, string Id, ApigatewayDomainNameAccessAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig">ApigatewayDomainNameAccessAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig">ApigatewayDomainNameAccessAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|ApigatewayDomainNameAccessAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDomainNameAccessAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDomainNameAccessAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDomainNameAccessAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDomainNameAccessAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDomainNameAccessAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigatewayDomainNameAccessAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayDomainNameAccessAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayDomainNameAccessAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDomainNameAccessAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameAccessAssociationArn">DomainNameAccessAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList">ApigatewayDomainNameAccessAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceInput">AccessAssociationSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput">AccessAssociationSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameArnInput">DomainNameArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSource">AccessAssociationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceType">AccessAssociationSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameArn">DomainNameArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainNameAccessAssociationArn`<sup>Required</sup> <a name="DomainNameAccessAssociationArn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameAccessAssociationArn"></a>

```csharp
public string DomainNameAccessAssociationArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tags"></a>

```csharp
public ApigatewayDomainNameAccessAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList">ApigatewayDomainNameAccessAssociationTagsList</a>

---

##### `AccessAssociationSourceInput`<sup>Optional</sup> <a name="AccessAssociationSourceInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceInput"></a>

```csharp
public string AccessAssociationSourceInput { get; }
```

- *Type:* string

---

##### `AccessAssociationSourceTypeInput`<sup>Optional</sup> <a name="AccessAssociationSourceTypeInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput"></a>

```csharp
public string AccessAssociationSourceTypeInput { get; }
```

- *Type:* string

---

##### `DomainNameArnInput`<sup>Optional</sup> <a name="DomainNameArnInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameArnInput"></a>

```csharp
public string DomainNameArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tagsInput"></a>

```csharp
public IResolvable|ApigatewayDomainNameAccessAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>[]

---

##### `AccessAssociationSource`<sup>Required</sup> <a name="AccessAssociationSource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSource"></a>

```csharp
public string AccessAssociationSource { get; }
```

- *Type:* string

---

##### `AccessAssociationSourceType`<sup>Required</sup> <a name="AccessAssociationSourceType" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceType"></a>

```csharp
public string AccessAssociationSourceType { get; }
```

- *Type:* string

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameArn"></a>

```csharp
public string DomainNameArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDomainNameAccessAssociationConfig <a name="ApigatewayDomainNameAccessAssociationConfig" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameAccessAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessAssociationSource,
    string AccessAssociationSourceType,
    string DomainNameArn,
    IResolvable|ApigatewayDomainNameAccessAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.accessAssociationSource">AccessAssociationSource</a></code> | <code>string</code> | The source of the domain name access association resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType">AccessAssociationSourceType</a></code> | <code>string</code> | The source type of the domain name access association resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.domainNameArn">DomainNameArn</a></code> | <code>string</code> | The amazon resource name (ARN) of the domain name resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>[]</code> | An array of arbitrary tags (key-value pairs) to associate with the domainname access association. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessAssociationSource`<sup>Required</sup> <a name="AccessAssociationSource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.accessAssociationSource"></a>

```csharp
public string AccessAssociationSource { get; set; }
```

- *Type:* string

The source of the domain name access association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#access_association_source ApigatewayDomainNameAccessAssociation#access_association_source}

---

##### `AccessAssociationSourceType`<sup>Required</sup> <a name="AccessAssociationSourceType" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType"></a>

```csharp
public string AccessAssociationSourceType { get; set; }
```

- *Type:* string

The source type of the domain name access association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#access_association_source_type ApigatewayDomainNameAccessAssociation#access_association_source_type}

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.domainNameArn"></a>

```csharp
public string DomainNameArn { get; set; }
```

- *Type:* string

The amazon resource name (ARN) of the domain name resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#domain_name_arn ApigatewayDomainNameAccessAssociation#domain_name_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.tags"></a>

```csharp
public IResolvable|ApigatewayDomainNameAccessAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>[]

An array of arbitrary tags (key-value pairs) to associate with the domainname access association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#tags ApigatewayDomainNameAccessAssociation#tags}

---

### ApigatewayDomainNameAccessAssociationTags <a name="ApigatewayDomainNameAccessAssociationTags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameAccessAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#key ApigatewayDomainNameAccessAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#value ApigatewayDomainNameAccessAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#key ApigatewayDomainNameAccessAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#value ApigatewayDomainNameAccessAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDomainNameAccessAssociationTagsList <a name="ApigatewayDomainNameAccessAssociationTagsList" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameAccessAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.get"></a>

```csharp
private ApigatewayDomainNameAccessAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDomainNameAccessAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>[]

---


### ApigatewayDomainNameAccessAssociationTagsOutputReference <a name="ApigatewayDomainNameAccessAssociationTagsOutputReference" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameAccessAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDomainNameAccessAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>

---



