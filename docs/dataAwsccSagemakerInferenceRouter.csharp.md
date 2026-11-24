# `dataAwsccSagemakerInferenceRouter` Submodule <a name="`dataAwsccSagemakerInferenceRouter` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerInferenceRouter <a name="DataAwsccSagemakerInferenceRouter" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/sagemaker_inference_router awscc_sagemaker_inference_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouter(Construct Scope, string Id, DataAwsccSagemakerInferenceRouterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig">DataAwsccSagemakerInferenceRouterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig">DataAwsccSagemakerInferenceRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerInferenceRouter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerInferenceRouter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerInferenceRouter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerInferenceRouter.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerInferenceRouter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSagemakerInferenceRouter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerInferenceRouter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerInferenceRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/sagemaker_inference_router#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerInferenceRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.inferenceRouterArn">InferenceRouterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.inferenceRouterName">InferenceRouterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.routingTargets">RoutingTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList">DataAwsccSagemakerInferenceRouterRoutingTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList">DataAwsccSagemakerInferenceRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `InferenceRouterArn`<sup>Required</sup> <a name="InferenceRouterArn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.inferenceRouterArn"></a>

```csharp
public string InferenceRouterArn { get; }
```

- *Type:* string

---

##### `InferenceRouterName`<sup>Required</sup> <a name="InferenceRouterName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.inferenceRouterName"></a>

```csharp
public string InferenceRouterName { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `RoutingTargets`<sup>Required</sup> <a name="RoutingTargets" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.routingTargets"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsList RoutingTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList">DataAwsccSagemakerInferenceRouterRoutingTargetsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.tags"></a>

```csharp
public DataAwsccSagemakerInferenceRouterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList">DataAwsccSagemakerInferenceRouterTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerInferenceRouterConfig <a name="DataAwsccSagemakerInferenceRouterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/sagemaker_inference_router#id DataAwsccSagemakerInferenceRouter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerInferenceRouterRoutingTargets <a name="DataAwsccSagemakerInferenceRouterRoutingTargets" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargets {

};
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig {

};
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig {

};
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig {

};
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig {

};
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations {

};
```


### DataAwsccSagemakerInferenceRouterTags <a name="DataAwsccSagemakerInferenceRouterTags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds">MaxTimeInBacklogSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTimeInBacklogSeconds`<sup>Required</sup> <a name="MaxTimeInBacklogSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds"></a>

```csharp
public double MaxTimeInBacklogSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">ErrorTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">SuccessTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorTopic`<sup>Required</sup> <a name="ErrorTopic" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```csharp
public string ErrorTopic { get; }
```

- *Type:* string

---

##### `SuccessTopic`<sup>Required</sup> <a name="SuccessTopic" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```csharp
public string SuccessTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath">S3FailurePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference NotificationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `S3FailurePath`<sup>Required</sup> <a name="S3FailurePath" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath"></a>

```csharp
public string S3FailurePath { get; }
```

- *Type:* string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference ClientConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference OutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.get"></a>

```csharp
private DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations">DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations">DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsList <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.get"></a>

```csharp
private DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig">AsyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList">DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference">RoutingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargets">DataAwsccSagemakerInferenceRouterRoutingTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AsyncInferenceConfig`<sup>Required</sup> <a name="AsyncInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference AsyncInferenceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a>

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList">DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoutingPreference`<sup>Required</sup> <a name="RoutingPreference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference"></a>

```csharp
public string RoutingPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerInferenceRouterRoutingTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargets">DataAwsccSagemakerInferenceRouterRoutingTargets</a>

---


### DataAwsccSagemakerInferenceRouterTagsList <a name="DataAwsccSagemakerInferenceRouterTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.get"></a>

```csharp
private DataAwsccSagemakerInferenceRouterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerInferenceRouterTagsOutputReference <a name="DataAwsccSagemakerInferenceRouterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerInferenceRouterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTags">DataAwsccSagemakerInferenceRouterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerInferenceRouterTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTags">DataAwsccSagemakerInferenceRouterTags</a>

---



