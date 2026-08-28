# `dataAwsccNimblestudioStudioComponent` Submodule <a name="`dataAwsccNimblestudioStudioComponent` Submodule" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNimblestudioStudioComponent <a name="DataAwsccNimblestudioStudioComponent" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_studio_component awscc_nimblestudio_studio_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponent(Construct Scope, string Id, DataAwsccNimblestudioStudioComponentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig">DataAwsccNimblestudioStudioComponentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig">DataAwsccNimblestudioStudioComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNimblestudioStudioComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNimblestudioStudioComponent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNimblestudioStudioComponent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNimblestudioStudioComponent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNimblestudioStudioComponent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccNimblestudioStudioComponent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNimblestudioStudioComponent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNimblestudioStudioComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_studio_component#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNimblestudioStudioComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.ec2SecurityGroupIds">Ec2SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.initializationScripts">InitializationScripts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList">DataAwsccNimblestudioStudioComponentInitializationScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.scriptParameters">ScriptParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList">DataAwsccNimblestudioStudioComponentScriptParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioComponentId">StudioComponentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioId">StudioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.configuration"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Ec2SecurityGroupIds`<sup>Required</sup> <a name="Ec2SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.ec2SecurityGroupIds"></a>

```csharp
public string[] Ec2SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `InitializationScripts`<sup>Required</sup> <a name="InitializationScripts" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.initializationScripts"></a>

```csharp
public DataAwsccNimblestudioStudioComponentInitializationScriptsList InitializationScripts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList">DataAwsccNimblestudioStudioComponentInitializationScriptsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScriptParameters`<sup>Required</sup> <a name="ScriptParameters" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.scriptParameters"></a>

```csharp
public DataAwsccNimblestudioStudioComponentScriptParametersList ScriptParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList">DataAwsccNimblestudioStudioComponentScriptParametersList</a>

---

##### `StudioComponentId`<sup>Required</sup> <a name="StudioComponentId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioComponentId"></a>

```csharp
public string StudioComponentId { get; }
```

- *Type:* string

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioId"></a>

```csharp
public string StudioId { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNimblestudioStudioComponentConfig <a name="DataAwsccNimblestudioStudioComponentConfig" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_studio_component#id DataAwsccNimblestudioStudioComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNimblestudioStudioComponentConfiguration <a name="DataAwsccNimblestudioStudioComponentConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfiguration {

};
```


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration {

};
```


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes {

};
```


### DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration {

};
```


### DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration {

};
```


### DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration {

};
```


### DataAwsccNimblestudioStudioComponentInitializationScripts <a name="DataAwsccNimblestudioStudioComponentInitializationScripts" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentInitializationScripts {

};
```


### DataAwsccNimblestudioStudioComponentScriptParameters <a name="DataAwsccNimblestudioStudioComponentScriptParameters" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentScriptParameters {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get"></a>

```csharp
private DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes">ComputerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputerAttributes`<sup>Required</sup> <a name="ComputerAttributes" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList ComputerAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a>

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser">ActiveDirectoryUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectoryUser`<sup>Required</sup> <a name="ActiveDirectoryUser" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser"></a>

```csharp
public string ActiveDirectoryUser { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration">ActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration">ComputeFarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration">LicenseServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration">SharedFileSystemConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration">DataAwsccNimblestudioStudioComponentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectoryConfiguration`<sup>Required</sup> <a name="ActiveDirectoryConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference ActiveDirectoryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a>

---

##### `ComputeFarmConfiguration`<sup>Required</sup> <a name="ComputeFarmConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference ComputeFarmConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a>

---

##### `LicenseServiceConfiguration`<sup>Required</sup> <a name="LicenseServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference LicenseServiceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a>

---

##### `SharedFileSystemConfiguration`<sup>Required</sup> <a name="SharedFileSystemConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference SharedFileSystemConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration">DataAwsccNimblestudioStudioComponentConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint">LinuxMountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive">WindowsMountDrive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `LinuxMountPoint`<sup>Required</sup> <a name="LinuxMountPoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint"></a>

```csharp
public string LinuxMountPoint { get; }
```

- *Type:* string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `WindowsMountDrive`<sup>Required</sup> <a name="WindowsMountDrive" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive"></a>

```csharp
public string WindowsMountDrive { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentInitializationScriptsList <a name="DataAwsccNimblestudioStudioComponentInitializationScriptsList" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentInitializationScriptsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.get"></a>

```csharp
private DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference <a name="DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion">LaunchProfileProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext">RunContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts">DataAwsccNimblestudioStudioComponentInitializationScripts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchProfileProtocolVersion`<sup>Required</sup> <a name="LaunchProfileProtocolVersion" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion"></a>

```csharp
public string LaunchProfileProtocolVersion { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `RunContext`<sup>Required</sup> <a name="RunContext" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext"></a>

```csharp
public string RunContext { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNimblestudioStudioComponentInitializationScripts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts">DataAwsccNimblestudioStudioComponentInitializationScripts</a>

---


### DataAwsccNimblestudioStudioComponentScriptParametersList <a name="DataAwsccNimblestudioStudioComponentScriptParametersList" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentScriptParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.get"></a>

```csharp
private DataAwsccNimblestudioStudioComponentScriptParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccNimblestudioStudioComponentScriptParametersOutputReference <a name="DataAwsccNimblestudioStudioComponentScriptParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNimblestudioStudioComponentScriptParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters">DataAwsccNimblestudioStudioComponentScriptParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNimblestudioStudioComponentScriptParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters">DataAwsccNimblestudioStudioComponentScriptParameters</a>

---



