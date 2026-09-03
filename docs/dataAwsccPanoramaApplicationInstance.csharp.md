# `dataAwsccPanoramaApplicationInstance` Submodule <a name="`dataAwsccPanoramaApplicationInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPanoramaApplicationInstance <a name="DataAwsccPanoramaApplicationInstance" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/panorama_application_instance awscc_panorama_application_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPanoramaApplicationInstance(Construct Scope, string Id, DataAwsccPanoramaApplicationInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig">DataAwsccPanoramaApplicationInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig">DataAwsccPanoramaApplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPanoramaApplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPanoramaApplicationInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPanoramaApplicationInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPanoramaApplicationInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPanoramaApplicationInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccPanoramaApplicationInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPanoramaApplicationInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPanoramaApplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/panorama_application_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPanoramaApplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.applicationInstanceId">ApplicationInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.applicationInstanceIdToReplace">ApplicationInstanceIdToReplace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.createdTime">CreatedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.defaultRuntimeContextDevice">DefaultRuntimeContextDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.defaultRuntimeContextDeviceName">DefaultRuntimeContextDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.healthStatus">HealthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.manifestOverridesPayload">ManifestOverridesPayload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference">DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.manifestPayload">ManifestPayload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference">DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.runtimeRoleArn">RuntimeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.statusDescription">StatusDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList">DataAwsccPanoramaApplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationInstanceId`<sup>Required</sup> <a name="ApplicationInstanceId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.applicationInstanceId"></a>

```csharp
public string ApplicationInstanceId { get; }
```

- *Type:* string

---

##### `ApplicationInstanceIdToReplace`<sup>Required</sup> <a name="ApplicationInstanceIdToReplace" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.applicationInstanceIdToReplace"></a>

```csharp
public string ApplicationInstanceIdToReplace { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.createdTime"></a>

```csharp
public double CreatedTime { get; }
```

- *Type:* double

---

##### `DefaultRuntimeContextDevice`<sup>Required</sup> <a name="DefaultRuntimeContextDevice" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.defaultRuntimeContextDevice"></a>

```csharp
public string DefaultRuntimeContextDevice { get; }
```

- *Type:* string

---

##### `DefaultRuntimeContextDeviceName`<sup>Required</sup> <a name="DefaultRuntimeContextDeviceName" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.defaultRuntimeContextDeviceName"></a>

```csharp
public string DefaultRuntimeContextDeviceName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.healthStatus"></a>

```csharp
public string HealthStatus { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.lastUpdatedTime"></a>

```csharp
public double LastUpdatedTime { get; }
```

- *Type:* double

---

##### `ManifestOverridesPayload`<sup>Required</sup> <a name="ManifestOverridesPayload" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.manifestOverridesPayload"></a>

```csharp
public DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference ManifestOverridesPayload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference">DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a>

---

##### `ManifestPayload`<sup>Required</sup> <a name="ManifestPayload" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.manifestPayload"></a>

```csharp
public DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference ManifestPayload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference">DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuntimeRoleArn`<sup>Required</sup> <a name="RuntimeRoleArn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.runtimeRoleArn"></a>

```csharp
public string RuntimeRoleArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDescription`<sup>Required</sup> <a name="StatusDescription" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.statusDescription"></a>

```csharp
public string StatusDescription { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.tags"></a>

```csharp
public DataAwsccPanoramaApplicationInstanceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList">DataAwsccPanoramaApplicationInstanceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPanoramaApplicationInstanceConfig <a name="DataAwsccPanoramaApplicationInstanceConfig" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPanoramaApplicationInstanceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/panorama_application_instance#id DataAwsccPanoramaApplicationInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPanoramaApplicationInstanceManifestOverridesPayload <a name="DataAwsccPanoramaApplicationInstanceManifestOverridesPayload" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPanoramaApplicationInstanceManifestOverridesPayload {

};
```


### DataAwsccPanoramaApplicationInstanceManifestPayload <a name="DataAwsccPanoramaApplicationInstanceManifestPayload" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPanoramaApplicationInstanceManifestPayload {

};
```


### DataAwsccPanoramaApplicationInstanceTags <a name="DataAwsccPanoramaApplicationInstanceTags" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPanoramaApplicationInstanceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference <a name="DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData">PayloadData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayload">DataAwsccPanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PayloadData`<sup>Required</sup> <a name="PayloadData" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData"></a>

```csharp
public string PayloadData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPanoramaApplicationInstanceManifestOverridesPayload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayload">DataAwsccPanoramaApplicationInstanceManifestOverridesPayload</a>

---


### DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference <a name="DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData">PayloadData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayload">DataAwsccPanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PayloadData`<sup>Required</sup> <a name="PayloadData" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData"></a>

```csharp
public string PayloadData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPanoramaApplicationInstanceManifestPayload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayload">DataAwsccPanoramaApplicationInstanceManifestPayload</a>

---


### DataAwsccPanoramaApplicationInstanceTagsList <a name="DataAwsccPanoramaApplicationInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPanoramaApplicationInstanceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.get"></a>

```csharp
private DataAwsccPanoramaApplicationInstanceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccPanoramaApplicationInstanceTagsOutputReference <a name="DataAwsccPanoramaApplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPanoramaApplicationInstanceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTags">DataAwsccPanoramaApplicationInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPanoramaApplicationInstanceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTags">DataAwsccPanoramaApplicationInstanceTags</a>

---



