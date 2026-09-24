# `dataAwsccDrsLaunchConfigurationTemplate` Submodule <a name="`dataAwsccDrsLaunchConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDrsLaunchConfigurationTemplate <a name="DataAwsccDrsLaunchConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template awscc_drs_launch_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsLaunchConfigurationTemplate(Construct Scope, string Id, DataAwsccDrsLaunchConfigurationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig">DataAwsccDrsLaunchConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig">DataAwsccDrsLaunchConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDrsLaunchConfigurationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDrsLaunchConfigurationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDrsLaunchConfigurationTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDrsLaunchConfigurationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDrsLaunchConfigurationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDrsLaunchConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDrsLaunchConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyPrivateIp">CopyPrivateIp</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyTags">CopyTags</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.exportBucketArn">ExportBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId">LaunchConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchDisposition">LaunchDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchIntoSourceInstance">LaunchIntoSourceInstance</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.licensing">Licensing</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference">DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.postLaunchEnabled">PostLaunchEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList">DataAwsccDrsLaunchConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod">TargetInstanceTypeRightSizingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CopyPrivateIp`<sup>Required</sup> <a name="CopyPrivateIp" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyPrivateIp"></a>

```csharp
public IResolvable CopyPrivateIp { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CopyTags`<sup>Required</sup> <a name="CopyTags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyTags"></a>

```csharp
public IResolvable CopyTags { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ExportBucketArn`<sup>Required</sup> <a name="ExportBucketArn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.exportBucketArn"></a>

```csharp
public string ExportBucketArn { get; }
```

- *Type:* string

---

##### `LaunchConfigurationTemplateId`<sup>Required</sup> <a name="LaunchConfigurationTemplateId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId"></a>

```csharp
public string LaunchConfigurationTemplateId { get; }
```

- *Type:* string

---

##### `LaunchDisposition`<sup>Required</sup> <a name="LaunchDisposition" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchDisposition"></a>

```csharp
public string LaunchDisposition { get; }
```

- *Type:* string

---

##### `LaunchIntoSourceInstance`<sup>Required</sup> <a name="LaunchIntoSourceInstance" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchIntoSourceInstance"></a>

```csharp
public IResolvable LaunchIntoSourceInstance { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Licensing`<sup>Required</sup> <a name="Licensing" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.licensing"></a>

```csharp
public DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference Licensing { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference">DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference</a>

---

##### `PostLaunchEnabled`<sup>Required</sup> <a name="PostLaunchEnabled" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.postLaunchEnabled"></a>

```csharp
public IResolvable PostLaunchEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tags"></a>

```csharp
public DataAwsccDrsLaunchConfigurationTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList">DataAwsccDrsLaunchConfigurationTemplateTagsList</a>

---

##### `TargetInstanceTypeRightSizingMethod`<sup>Required</sup> <a name="TargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod"></a>

```csharp
public string TargetInstanceTypeRightSizingMethod { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDrsLaunchConfigurationTemplateConfig <a name="DataAwsccDrsLaunchConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsLaunchConfigurationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#id DataAwsccDrsLaunchConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDrsLaunchConfigurationTemplateLicensing <a name="DataAwsccDrsLaunchConfigurationTemplateLicensing" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsLaunchConfigurationTemplateLicensing {

};
```


### DataAwsccDrsLaunchConfigurationTemplateTags <a name="DataAwsccDrsLaunchConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsLaunchConfigurationTemplateTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference <a name="DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol">OsByol</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing">DataAwsccDrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OsByol`<sup>Required</sup> <a name="OsByol" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol"></a>

```csharp
public IResolvable OsByol { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDrsLaunchConfigurationTemplateLicensing InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing">DataAwsccDrsLaunchConfigurationTemplateLicensing</a>

---


### DataAwsccDrsLaunchConfigurationTemplateTagsList <a name="DataAwsccDrsLaunchConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsLaunchConfigurationTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get"></a>

```csharp
private DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference <a name="DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags">DataAwsccDrsLaunchConfigurationTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDrsLaunchConfigurationTemplateTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags">DataAwsccDrsLaunchConfigurationTemplateTags</a>

---



