# `dataAwsccElasticbeanstalkConfigurationTemplate` Submodule <a name="`dataAwsccElasticbeanstalkConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticbeanstalkConfigurationTemplate <a name="DataAwsccElasticbeanstalkConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkConfigurationTemplate(Construct Scope, string Id, DataAwsccElasticbeanstalkConfigurationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig">DataAwsccElasticbeanstalkConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig">DataAwsccElasticbeanstalkConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticbeanstalkConfigurationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticbeanstalkConfigurationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticbeanstalkConfigurationTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticbeanstalkConfigurationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticbeanstalkConfigurationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticbeanstalkConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticbeanstalk_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticbeanstalkConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.optionSettings">OptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.platformArn">PlatformArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.solutionStackName">SolutionStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `OptionSettings`<sup>Required</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.optionSettings"></a>

```csharp
public DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList OptionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList</a>

---

##### `PlatformArn`<sup>Required</sup> <a name="PlatformArn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.platformArn"></a>

```csharp
public string PlatformArn { get; }
```

- *Type:* string

---

##### `SolutionStackName`<sup>Required</sup> <a name="SolutionStackName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.solutionStackName"></a>

```csharp
public string SolutionStackName { get; }
```

- *Type:* string

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.sourceConfiguration"></a>

```csharp
public DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference SourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a>

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticbeanstalkConfigurationTemplateConfig <a name="DataAwsccElasticbeanstalkConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkConfigurationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticbeanstalk_configuration_template#id DataAwsccElasticbeanstalkConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings <a name="DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings {

};
```


### DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration <a name="DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList <a name="DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.get"></a>

```csharp
private DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference <a name="DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName">OptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OptionName`<sup>Required</sup> <a name="OptionName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName"></a>

```csharp
public string OptionName { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings</a>

---


### DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference <a name="DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---



