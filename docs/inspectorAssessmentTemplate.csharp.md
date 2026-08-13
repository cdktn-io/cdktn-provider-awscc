# `inspectorAssessmentTemplate` Submodule <a name="`inspectorAssessmentTemplate` Submodule" id="@cdktn/provider-awscc.inspectorAssessmentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InspectorAssessmentTemplate <a name="InspectorAssessmentTemplate" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template awscc_inspector_assessment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InspectorAssessmentTemplate(Construct Scope, string Id, InspectorAssessmentTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig">InspectorAssessmentTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig">InspectorAssessmentTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings">PutUserAttributesForFindings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetAssessmentTemplateName">ResetAssessmentTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetUserAttributesForFindings">ResetUserAttributesForFindings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUserAttributesForFindings` <a name="PutUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings"></a>

```csharp
private void PutUserAttributesForFindings(IResolvable|InspectorAssessmentTemplateUserAttributesForFindings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]

---

##### `ResetAssessmentTemplateName` <a name="ResetAssessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetAssessmentTemplateName"></a>

```csharp
private void ResetAssessmentTemplateName()
```

##### `ResetUserAttributesForFindings` <a name="ResetUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetUserAttributesForFindings"></a>

```csharp
private void ResetUserAttributesForFindings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InspectorAssessmentTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InspectorAssessmentTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InspectorAssessmentTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InspectorAssessmentTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InspectorAssessmentTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InspectorAssessmentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the InspectorAssessmentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindings">UserAttributesForFindings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList">InspectorAssessmentTemplateUserAttributesForFindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArnInput">AssessmentTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateNameInput">AssessmentTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSecondsInput">DurationInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput">RulesPackageArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindingsInput">UserAttributesForFindingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArn">AssessmentTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateName">AssessmentTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSeconds">DurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns">RulesPackageArns</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UserAttributesForFindings`<sup>Required</sup> <a name="UserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindings"></a>

```csharp
public InspectorAssessmentTemplateUserAttributesForFindingsList UserAttributesForFindings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList">InspectorAssessmentTemplateUserAttributesForFindingsList</a>

---

##### `AssessmentTargetArnInput`<sup>Optional</sup> <a name="AssessmentTargetArnInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArnInput"></a>

```csharp
public string AssessmentTargetArnInput { get; }
```

- *Type:* string

---

##### `AssessmentTemplateNameInput`<sup>Optional</sup> <a name="AssessmentTemplateNameInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateNameInput"></a>

```csharp
public string AssessmentTemplateNameInput { get; }
```

- *Type:* string

---

##### `DurationInSecondsInput`<sup>Optional</sup> <a name="DurationInSecondsInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSecondsInput"></a>

```csharp
public double DurationInSecondsInput { get; }
```

- *Type:* double

---

##### `RulesPackageArnsInput`<sup>Optional</sup> <a name="RulesPackageArnsInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput"></a>

```csharp
public string[] RulesPackageArnsInput { get; }
```

- *Type:* string[]

---

##### `UserAttributesForFindingsInput`<sup>Optional</sup> <a name="UserAttributesForFindingsInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindingsInput"></a>

```csharp
public IResolvable|InspectorAssessmentTemplateUserAttributesForFindings[] UserAttributesForFindingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]

---

##### `AssessmentTargetArn`<sup>Required</sup> <a name="AssessmentTargetArn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArn"></a>

```csharp
public string AssessmentTargetArn { get; }
```

- *Type:* string

---

##### `AssessmentTemplateName`<sup>Required</sup> <a name="AssessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateName"></a>

```csharp
public string AssessmentTemplateName { get; }
```

- *Type:* string

---

##### `DurationInSeconds`<sup>Required</sup> <a name="DurationInSeconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSeconds"></a>

```csharp
public double DurationInSeconds { get; }
```

- *Type:* double

---

##### `RulesPackageArns`<sup>Required</sup> <a name="RulesPackageArns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns"></a>

```csharp
public string[] RulesPackageArns { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InspectorAssessmentTemplateConfig <a name="InspectorAssessmentTemplateConfig" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InspectorAssessmentTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssessmentTargetArn,
    double DurationInSeconds,
    string[] RulesPackageArns,
    string AssessmentTemplateName = null,
    IResolvable|InspectorAssessmentTemplateUserAttributesForFindings[] UserAttributesForFindings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTargetArn">AssessmentTargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.durationInSeconds">DurationInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns">RulesPackageArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTemplateName">AssessmentTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.userAttributesForFindings">UserAttributesForFindings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssessmentTargetArn`<sup>Required</sup> <a name="AssessmentTargetArn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTargetArn"></a>

```csharp
public string AssessmentTargetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}.

---

##### `DurationInSeconds`<sup>Required</sup> <a name="DurationInSeconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.durationInSeconds"></a>

```csharp
public double DurationInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}.

---

##### `RulesPackageArns`<sup>Required</sup> <a name="RulesPackageArns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns"></a>

```csharp
public string[] RulesPackageArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `AssessmentTemplateName`<sup>Optional</sup> <a name="AssessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTemplateName"></a>

```csharp
public string AssessmentTemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}.

---

##### `UserAttributesForFindings`<sup>Optional</sup> <a name="UserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.userAttributesForFindings"></a>

```csharp
public IResolvable|InspectorAssessmentTemplateUserAttributesForFindings[] UserAttributesForFindings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}.

---

### InspectorAssessmentTemplateUserAttributesForFindings <a name="InspectorAssessmentTemplateUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InspectorAssessmentTemplateUserAttributesForFindings {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#key InspectorAssessmentTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#value InspectorAssessmentTemplate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#key InspectorAssessmentTemplate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#value InspectorAssessmentTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InspectorAssessmentTemplateUserAttributesForFindingsList <a name="InspectorAssessmentTemplateUserAttributesForFindingsList" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InspectorAssessmentTemplateUserAttributesForFindingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get"></a>

```csharp
private InspectorAssessmentTemplateUserAttributesForFindingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.internalValue"></a>

```csharp
public IResolvable|InspectorAssessmentTemplateUserAttributesForFindings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]

---


### InspectorAssessmentTemplateUserAttributesForFindingsOutputReference <a name="InspectorAssessmentTemplateUserAttributesForFindingsOutputReference" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InspectorAssessmentTemplateUserAttributesForFindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InspectorAssessmentTemplateUserAttributesForFindings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>

---



