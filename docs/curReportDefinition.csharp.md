# `curReportDefinition` Submodule <a name="`curReportDefinition` Submodule" id="@cdktn/provider-awscc.curReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurReportDefinition <a name="CurReportDefinition" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition awscc_cur_report_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CurReportDefinition(Construct Scope, string Id, CurReportDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts">ResetAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalSchemaElements">ResetAdditionalSchemaElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetBillingViewArn">ResetBillingViewArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.putTags"></a>

```csharp
private void PutTags(IResolvable|CurReportDefinitionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]

---

##### `ResetAdditionalArtifacts` <a name="ResetAdditionalArtifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts"></a>

```csharp
private void ResetAdditionalArtifacts()
```

##### `ResetAdditionalSchemaElements` <a name="ResetAdditionalSchemaElements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalSchemaElements"></a>

```csharp
private void ResetAdditionalSchemaElements()
```

##### `ResetBillingViewArn` <a name="ResetBillingViewArn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetBillingViewArn"></a>

```csharp
private void ResetBillingViewArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CurReportDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CurReportDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CurReportDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CurReportDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CurReportDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CurReportDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CurReportDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CurReportDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CurReportDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList">CurReportDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput">AdditionalArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput">AdditionalSchemaElementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArnInput">BillingViewArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput">RefreshClosedReportsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportNameInput">ReportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioningInput">ReportVersioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3PrefixInput">S3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3RegionInput">S3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnitInput">TimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElements">AdditionalSchemaElements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArn">BillingViewArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReports">RefreshClosedReports</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportName">ReportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioning">ReportVersioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Region">S3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnit">TimeUnit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tags"></a>

```csharp
public CurReportDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList">CurReportDefinitionTagsList</a>

---

##### `AdditionalArtifactsInput`<sup>Optional</sup> <a name="AdditionalArtifactsInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput"></a>

```csharp
public string[] AdditionalArtifactsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalSchemaElementsInput`<sup>Optional</sup> <a name="AdditionalSchemaElementsInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput"></a>

```csharp
public string[] AdditionalSchemaElementsInput { get; }
```

- *Type:* string[]

---

##### `BillingViewArnInput`<sup>Optional</sup> <a name="BillingViewArnInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArnInput"></a>

```csharp
public string BillingViewArnInput { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `RefreshClosedReportsInput`<sup>Optional</sup> <a name="RefreshClosedReportsInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput"></a>

```csharp
public bool|IResolvable RefreshClosedReportsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReportNameInput`<sup>Optional</sup> <a name="ReportNameInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportNameInput"></a>

```csharp
public string ReportNameInput { get; }
```

- *Type:* string

---

##### `ReportVersioningInput`<sup>Optional</sup> <a name="ReportVersioningInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioningInput"></a>

```csharp
public string ReportVersioningInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3PrefixInput`<sup>Optional</sup> <a name="S3PrefixInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3PrefixInput"></a>

```csharp
public string S3PrefixInput { get; }
```

- *Type:* string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3RegionInput"></a>

```csharp
public string S3RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tagsInput"></a>

```csharp
public IResolvable|CurReportDefinitionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnitInput"></a>

```csharp
public string TimeUnitInput { get; }
```

- *Type:* string

---

##### `AdditionalArtifacts`<sup>Required</sup> <a name="AdditionalArtifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifacts"></a>

```csharp
public string[] AdditionalArtifacts { get; }
```

- *Type:* string[]

---

##### `AdditionalSchemaElements`<sup>Required</sup> <a name="AdditionalSchemaElements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElements"></a>

```csharp
public string[] AdditionalSchemaElements { get; }
```

- *Type:* string[]

---

##### `BillingViewArn`<sup>Required</sup> <a name="BillingViewArn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArn"></a>

```csharp
public string BillingViewArn { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `RefreshClosedReports`<sup>Required</sup> <a name="RefreshClosedReports" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReports"></a>

```csharp
public bool|IResolvable RefreshClosedReports { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportName"></a>

```csharp
public string ReportName { get; }
```

- *Type:* string

---

##### `ReportVersioning`<sup>Required</sup> <a name="ReportVersioning" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioning"></a>

```csharp
public string ReportVersioning { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; }
```

- *Type:* string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Region"></a>

```csharp
public string S3Region { get; }
```

- *Type:* string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnit"></a>

```csharp
public string TimeUnit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CurReportDefinitionConfig <a name="CurReportDefinitionConfig" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CurReportDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Compression,
    string Format,
    bool|IResolvable RefreshClosedReports,
    string ReportName,
    string ReportVersioning,
    string S3Bucket,
    string S3Prefix,
    string S3Region,
    string TimeUnit,
    string[] AdditionalArtifacts = null,
    string[] AdditionalSchemaElements = null,
    string BillingViewArn = null,
    IResolvable|CurReportDefinitionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.compression">Compression</a></code> | <code>string</code> | The compression format that AWS uses for the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.format">Format</a></code> | <code>string</code> | The format that AWS saves the report in. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports">RefreshClosedReports</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportName">ReportName</a></code> | <code>string</code> | The name of the report that you want to create. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning">ReportVersioning</a></code> | <code>string</code> | Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | The S3 bucket where AWS delivers the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Region">S3Region</a></code> | <code>string</code> | The region of the S3 bucket that AWS delivers the report into. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.timeUnit">TimeUnit</a></code> | <code>string</code> | The granularity of the line items in the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code>string[]</code> | A list of manifests that you want Amazon Web Services to create for this report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements">AdditionalSchemaElements</a></code> | <code>string[]</code> | A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.billingViewArn">BillingViewArn</a></code> | <code>string</code> | The Amazon resource name of the billing view. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

The compression format that AWS uses for the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#compression CurReportDefinition#compression}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

The format that AWS saves the report in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#format CurReportDefinition#format}

---

##### `RefreshClosedReports`<sup>Required</sup> <a name="RefreshClosedReports" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports"></a>

```csharp
public bool|IResolvable RefreshClosedReports { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months.

These charges can include refunds, credits, or support fees.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportName"></a>

```csharp
public string ReportName { get; set; }
```

- *Type:* string

The name of the report that you want to create.

The name must be unique, is case sensitive, and can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#report_name CurReportDefinition#report_name}

---

##### `ReportVersioning`<sup>Required</sup> <a name="ReportVersioning" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning"></a>

```csharp
public string ReportVersioning { get; set; }
```

- *Type:* string

Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#report_versioning CurReportDefinition#report_versioning}

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

The S3 bucket where AWS delivers the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; set; }
```

- *Type:* string

The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Region"></a>

```csharp
public string S3Region { get; set; }
```

- *Type:* string

The region of the S3 bucket that AWS delivers the report into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#s3_region CurReportDefinition#s3_region}

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.timeUnit"></a>

```csharp
public string TimeUnit { get; set; }
```

- *Type:* string

The granularity of the line items in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#time_unit CurReportDefinition#time_unit}

---

##### `AdditionalArtifacts`<sup>Optional</sup> <a name="AdditionalArtifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts"></a>

```csharp
public string[] AdditionalArtifacts { get; set; }
```

- *Type:* string[]

A list of manifests that you want Amazon Web Services to create for this report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}

---

##### `AdditionalSchemaElements`<sup>Optional</sup> <a name="AdditionalSchemaElements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements"></a>

```csharp
public string[] AdditionalSchemaElements { get; set; }
```

- *Type:* string[]

A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}

---

##### `BillingViewArn`<sup>Optional</sup> <a name="BillingViewArn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.billingViewArn"></a>

```csharp
public string BillingViewArn { get; set; }
```

- *Type:* string

The Amazon resource name of the billing view.

You can get this value by using the billing view service public APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#billing_view_arn CurReportDefinition#billing_view_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.tags"></a>

```csharp
public IResolvable|CurReportDefinitionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}.

---

### CurReportDefinitionTags <a name="CurReportDefinitionTags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CurReportDefinitionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#key CurReportDefinition#key}. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#value CurReportDefinition#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#key CurReportDefinition#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cur_report_definition#value CurReportDefinition#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CurReportDefinitionTagsList <a name="CurReportDefinitionTagsList" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CurReportDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.get"></a>

```csharp
private CurReportDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.internalValue"></a>

```csharp
public IResolvable|CurReportDefinitionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]

---


### CurReportDefinitionTagsOutputReference <a name="CurReportDefinitionTagsOutputReference" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CurReportDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CurReportDefinitionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>

---



