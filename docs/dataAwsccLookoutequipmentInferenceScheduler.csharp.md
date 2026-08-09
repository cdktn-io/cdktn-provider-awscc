# `dataAwsccLookoutequipmentInferenceScheduler` Submodule <a name="`dataAwsccLookoutequipmentInferenceScheduler` Submodule" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLookoutequipmentInferenceScheduler <a name="DataAwsccLookoutequipmentInferenceScheduler" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceScheduler(Construct Scope, string Id, DataAwsccLookoutequipmentInferenceSchedulerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig">DataAwsccLookoutequipmentInferenceSchedulerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig">DataAwsccLookoutequipmentInferenceSchedulerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLookoutequipmentInferenceScheduler.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLookoutequipmentInferenceScheduler.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLookoutequipmentInferenceScheduler.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLookoutequipmentInferenceScheduler.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccLookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLookoutequipmentInferenceScheduler to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLookoutequipmentInferenceScheduler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lookoutequipment_inference_scheduler#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLookoutequipmentInferenceScheduler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes">DataDelayOffsetInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataInputConfiguration">DataInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataOutputConfiguration">DataOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataUploadFrequency">DataUploadFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerArn">InferenceSchedulerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerName">InferenceSchedulerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.serverSideKmsKeyId">ServerSideKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList">DataAwsccLookoutequipmentInferenceSchedulerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DataDelayOffsetInMinutes`<sup>Required</sup> <a name="DataDelayOffsetInMinutes" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes"></a>

```csharp
public double DataDelayOffsetInMinutes { get; }
```

- *Type:* double

---

##### `DataInputConfiguration`<sup>Required</sup> <a name="DataInputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataInputConfiguration"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference DataInputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a>

---

##### `DataOutputConfiguration`<sup>Required</sup> <a name="DataOutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataOutputConfiguration"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference DataOutputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a>

---

##### `DataUploadFrequency`<sup>Required</sup> <a name="DataUploadFrequency" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataUploadFrequency"></a>

```csharp
public string DataUploadFrequency { get; }
```

- *Type:* string

---

##### `InferenceSchedulerArn`<sup>Required</sup> <a name="InferenceSchedulerArn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerArn"></a>

```csharp
public string InferenceSchedulerArn { get; }
```

- *Type:* string

---

##### `InferenceSchedulerName`<sup>Required</sup> <a name="InferenceSchedulerName" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerName"></a>

```csharp
public string InferenceSchedulerName { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `ServerSideKmsKeyId`<sup>Required</sup> <a name="ServerSideKmsKeyId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.serverSideKmsKeyId"></a>

```csharp
public string ServerSideKmsKeyId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tags"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList">DataAwsccLookoutequipmentInferenceSchedulerTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLookoutequipmentInferenceSchedulerConfig <a name="DataAwsccLookoutequipmentInferenceSchedulerConfig" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lookoutequipment_inference_scheduler#id DataAwsccLookoutequipmentInferenceScheduler#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration {

};
```


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration {

};
```


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration {

};
```


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration {

};
```


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration {

};
```


### DataAwsccLookoutequipmentInferenceSchedulerTags <a name="DataAwsccLookoutequipmentInferenceSchedulerTags" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter">ComponentTimestampDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentTimestampDelimiter`<sup>Required</sup> <a name="ComponentTimestampDelimiter" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter"></a>

```csharp
public string ComponentTimestampDelimiter { get; }
```

- *Type:* string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration">InferenceInputNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset">InputTimeZoneOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration">S3InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InferenceInputNameConfiguration`<sup>Required</sup> <a name="InferenceInputNameConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference InferenceInputNameConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a>

---

##### `InputTimeZoneOffset`<sup>Required</sup> <a name="InputTimeZoneOffset" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset"></a>

```csharp
public string InputTimeZoneOffset { get; }
```

- *Type:* string

---

##### `S3InputConfiguration`<sup>Required</sup> <a name="S3InputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference S3InputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration">S3OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `S3OutputConfiguration`<sup>Required</sup> <a name="S3OutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference S3OutputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerTagsList <a name="DataAwsccLookoutequipmentInferenceSchedulerTagsList" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.get"></a>

```csharp
private DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags">DataAwsccLookoutequipmentInferenceSchedulerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLookoutequipmentInferenceSchedulerTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags">DataAwsccLookoutequipmentInferenceSchedulerTags</a>

---



