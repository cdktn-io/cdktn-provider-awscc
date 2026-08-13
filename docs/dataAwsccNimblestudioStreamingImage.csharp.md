# `dataAwsccNimblestudioStreamingImage` Submodule <a name="`dataAwsccNimblestudioStreamingImage` Submodule" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNimblestudioStreamingImage <a name="DataAwsccNimblestudioStreamingImage" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/nimblestudio_streaming_image awscc_nimblestudio_streaming_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStreamingImage(Construct Scope, string Id, DataAwsccNimblestudioStreamingImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig">DataAwsccNimblestudioStreamingImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig">DataAwsccNimblestudioStreamingImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNimblestudioStreamingImage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNimblestudioStreamingImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNimblestudioStreamingImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNimblestudioStreamingImage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNimblestudioStreamingImage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccNimblestudioStreamingImage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNimblestudioStreamingImage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNimblestudioStreamingImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/nimblestudio_streaming_image#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNimblestudioStreamingImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.ec2ImageId">Ec2ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference">DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.encryptionConfigurationKeyArn">EncryptionConfigurationKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.encryptionConfigurationKeyType">EncryptionConfigurationKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.eulaIds">EulaIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.streamingImageId">StreamingImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.studioId">StudioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Ec2ImageId`<sup>Required</sup> <a name="Ec2ImageId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.ec2ImageId"></a>

```csharp
public string Ec2ImageId { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.encryptionConfiguration"></a>

```csharp
public DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference">DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference</a>

---

##### `EncryptionConfigurationKeyArn`<sup>Required</sup> <a name="EncryptionConfigurationKeyArn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.encryptionConfigurationKeyArn"></a>

```csharp
public string EncryptionConfigurationKeyArn { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationKeyType`<sup>Required</sup> <a name="EncryptionConfigurationKeyType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.encryptionConfigurationKeyType"></a>

```csharp
public string EncryptionConfigurationKeyType { get; }
```

- *Type:* string

---

##### `EulaIds`<sup>Required</sup> <a name="EulaIds" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.eulaIds"></a>

```csharp
public string[] EulaIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `StreamingImageId`<sup>Required</sup> <a name="StreamingImageId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.streamingImageId"></a>

```csharp
public string StreamingImageId { get; }
```

- *Type:* string

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.studioId"></a>

```csharp
public string StudioId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNimblestudioStreamingImageConfig <a name="DataAwsccNimblestudioStreamingImageConfig" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStreamingImageConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/nimblestudio_streaming_image#id DataAwsccNimblestudioStreamingImage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNimblestudioStreamingImageEncryptionConfiguration <a name="DataAwsccNimblestudioStreamingImageEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStreamingImageEncryptionConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference <a name="DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfiguration">DataAwsccNimblestudioStreamingImageEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNimblestudioStreamingImageEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStreamingImage.DataAwsccNimblestudioStreamingImageEncryptionConfiguration">DataAwsccNimblestudioStreamingImageEncryptionConfiguration</a>

---



