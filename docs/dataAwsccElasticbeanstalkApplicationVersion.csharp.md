# `dataAwsccElasticbeanstalkApplicationVersion` Submodule <a name="`dataAwsccElasticbeanstalkApplicationVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticbeanstalkApplicationVersion <a name="DataAwsccElasticbeanstalkApplicationVersion" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersion(Construct Scope, string Id, DataAwsccElasticbeanstalkApplicationVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig">DataAwsccElasticbeanstalkApplicationVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig">DataAwsccElasticbeanstalkApplicationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticbeanstalkApplicationVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticbeanstalkApplicationVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticbeanstalkApplicationVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticbeanstalkApplicationVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticbeanstalkApplicationVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticbeanstalkApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/elasticbeanstalk_application_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticbeanstalkApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.applicationVersionId">ApplicationVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.buildConfiguration">BuildConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.process">Process</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.sourceBundle">SourceBundle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference">DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `ApplicationVersionId`<sup>Required</sup> <a name="ApplicationVersionId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.applicationVersionId"></a>

```csharp
public string ApplicationVersionId { get; }
```

- *Type:* string

---

##### `BuildConfiguration`<sup>Required</sup> <a name="BuildConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.buildConfiguration"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference BuildConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ImageConfiguration`<sup>Required</sup> <a name="ImageConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.imageConfiguration"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference ImageConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a>

---

##### `Process`<sup>Required</sup> <a name="Process" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.process"></a>

```csharp
public IResolvable Process { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SourceBundle`<sup>Required</sup> <a name="SourceBundle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.sourceBundle"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference SourceBundle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference">DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration <a name="DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration {

};
```


### DataAwsccElasticbeanstalkApplicationVersionConfig <a name="DataAwsccElasticbeanstalkApplicationVersionConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/elasticbeanstalk_application_version#id DataAwsccElasticbeanstalkApplicationVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticbeanstalkApplicationVersionImageConfiguration <a name="DataAwsccElasticbeanstalkApplicationVersionImageConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionImageConfiguration {

};
```


### DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild <a name="DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild {

};
```


### DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource <a name="DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource {

};
```


### DataAwsccElasticbeanstalkApplicationVersionSourceBundle <a name="DataAwsccElasticbeanstalkApplicationVersionSourceBundle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionSourceBundle {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference <a name="DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName">ArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole">CodeBuildServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType">ComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration">DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactName`<sup>Required</sup> <a name="ArtifactName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName"></a>

```csharp
public string ArtifactName { get; }
```

- *Type:* string

---

##### `CodeBuildServiceRole`<sup>Required</sup> <a name="CodeBuildServiceRole" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole"></a>

```csharp
public string CodeBuildServiceRole { get; }
```

- *Type:* string

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType"></a>

```csharp
public string ComputeType { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `TimeoutInMinutes`<sup>Required</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes"></a>

```csharp
public double TimeoutInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration">DataAwsccElasticbeanstalkApplicationVersionBuildConfiguration</a>

---


### DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference <a name="DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack">Buildpack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole">CodeBuildServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType">ComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation">DockerfileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Buildpack`<sup>Required</sup> <a name="Buildpack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack"></a>

```csharp
public string Buildpack { get; }
```

- *Type:* string

---

##### `CodeBuildServiceRole`<sup>Required</sup> <a name="CodeBuildServiceRole" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole"></a>

```csharp
public string CodeBuildServiceRole { get; }
```

- *Type:* string

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType"></a>

```csharp
public string ComputeType { get; }
```

- *Type:* string

---

##### `DockerfileLocation`<sup>Required</sup> <a name="DockerfileLocation" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation"></a>

```csharp
public string DockerfileLocation { get; }
```

- *Type:* string

---

##### `TimeoutInMinutes`<sup>Required</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes"></a>

```csharp
public double TimeoutInMinutes { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---


### DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference <a name="DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfiguration">DataAwsccElasticbeanstalkApplicationVersionImageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference BuildAttribute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionImageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfiguration">DataAwsccElasticbeanstalkApplicationVersionImageConfiguration</a>

---


### DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference <a name="DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource">DataAwsccElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---


### DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference <a name="DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundle">DataAwsccElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticbeanstalkApplicationVersionSourceBundle InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundle">DataAwsccElasticbeanstalkApplicationVersionSourceBundle</a>

---



