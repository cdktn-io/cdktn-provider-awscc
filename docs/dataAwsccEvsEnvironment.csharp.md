# `dataAwsccEvsEnvironment` Submodule <a name="`dataAwsccEvsEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEvsEnvironment <a name="DataAwsccEvsEnvironment" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/evs_environment awscc_evs_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironment(Construct Scope, string Id, DataAwsccEvsEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig">DataAwsccEvsEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig">DataAwsccEvsEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEvsEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEvsEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEvsEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEvsEnvironment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEvsEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEvsEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEvsEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEvsEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/evs_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEvsEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.checks">Checks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList">DataAwsccEvsEnvironmentChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference">DataAwsccEvsEnvironmentConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList">DataAwsccEvsEnvironmentCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentArn">EnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentName">EnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentState">EnvironmentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.hosts">Hosts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList">DataAwsccEvsEnvironmentHostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.initialVlans">InitialVlans</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference">DataAwsccEvsEnvironmentInitialVlansOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.licenseInfo">LicenseInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference">DataAwsccEvsEnvironmentLicenseInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.serviceAccessSecurityGroups">ServiceAccessSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference">DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.serviceAccessSubnetId">ServiceAccessSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.siteId">SiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.stateDetails">StateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList">DataAwsccEvsEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.termsAccepted">TermsAccepted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vcfHostnames">VcfHostnames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference">DataAwsccEvsEnvironmentVcfHostnamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vcfVersion">VcfVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Checks`<sup>Required</sup> <a name="Checks" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.checks"></a>

```csharp
public DataAwsccEvsEnvironmentChecksList Checks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList">DataAwsccEvsEnvironmentChecksList</a>

---

##### `ConnectivityInfo`<sup>Required</sup> <a name="ConnectivityInfo" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.connectivityInfo"></a>

```csharp
public DataAwsccEvsEnvironmentConnectivityInfoOutputReference ConnectivityInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference">DataAwsccEvsEnvironmentConnectivityInfoOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.credentials"></a>

```csharp
public DataAwsccEvsEnvironmentCredentialsList Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList">DataAwsccEvsEnvironmentCredentialsList</a>

---

##### `EnvironmentArn`<sup>Required</sup> <a name="EnvironmentArn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentArn"></a>

```csharp
public string EnvironmentArn { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentName"></a>

```csharp
public string EnvironmentName { get; }
```

- *Type:* string

---

##### `EnvironmentState`<sup>Required</sup> <a name="EnvironmentState" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentState"></a>

```csharp
public string EnvironmentState { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.hosts"></a>

```csharp
public DataAwsccEvsEnvironmentHostsList Hosts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList">DataAwsccEvsEnvironmentHostsList</a>

---

##### `InitialVlans`<sup>Required</sup> <a name="InitialVlans" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.initialVlans"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansOutputReference InitialVlans { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference">DataAwsccEvsEnvironmentInitialVlansOutputReference</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LicenseInfo`<sup>Required</sup> <a name="LicenseInfo" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.licenseInfo"></a>

```csharp
public DataAwsccEvsEnvironmentLicenseInfoOutputReference LicenseInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference">DataAwsccEvsEnvironmentLicenseInfoOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `ServiceAccessSecurityGroups`<sup>Required</sup> <a name="ServiceAccessSecurityGroups" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.serviceAccessSecurityGroups"></a>

```csharp
public DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference ServiceAccessSecurityGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference">DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference</a>

---

##### `ServiceAccessSubnetId`<sup>Required</sup> <a name="ServiceAccessSubnetId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.serviceAccessSubnetId"></a>

```csharp
public string ServiceAccessSubnetId { get; }
```

- *Type:* string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.siteId"></a>

```csharp
public string SiteId { get; }
```

- *Type:* string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.stateDetails"></a>

```csharp
public string StateDetails { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.tags"></a>

```csharp
public DataAwsccEvsEnvironmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList">DataAwsccEvsEnvironmentTagsList</a>

---

##### `TermsAccepted`<sup>Required</sup> <a name="TermsAccepted" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.termsAccepted"></a>

```csharp
public IResolvable TermsAccepted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VcfHostnames`<sup>Required</sup> <a name="VcfHostnames" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vcfHostnames"></a>

```csharp
public DataAwsccEvsEnvironmentVcfHostnamesOutputReference VcfHostnames { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference">DataAwsccEvsEnvironmentVcfHostnamesOutputReference</a>

---

##### `VcfVersion`<sup>Required</sup> <a name="VcfVersion" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vcfVersion"></a>

```csharp
public string VcfVersion { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEvsEnvironmentChecks <a name="DataAwsccEvsEnvironmentChecks" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentChecks {

};
```


### DataAwsccEvsEnvironmentConfig <a name="DataAwsccEvsEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/evs_environment#id DataAwsccEvsEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEvsEnvironmentConnectivityInfo <a name="DataAwsccEvsEnvironmentConnectivityInfo" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentConnectivityInfo {

};
```


### DataAwsccEvsEnvironmentCredentials <a name="DataAwsccEvsEnvironmentCredentials" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentCredentials {

};
```


### DataAwsccEvsEnvironmentHosts <a name="DataAwsccEvsEnvironmentHosts" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHosts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentHosts {

};
```


### DataAwsccEvsEnvironmentInitialVlans <a name="DataAwsccEvsEnvironmentInitialVlans" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlans"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlans.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlans {

};
```


### DataAwsccEvsEnvironmentInitialVlansEdgeVTep <a name="DataAwsccEvsEnvironmentInitialVlansEdgeVTep" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTep.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansEdgeVTep {

};
```


### DataAwsccEvsEnvironmentInitialVlansExpansionVlan1 <a name="DataAwsccEvsEnvironmentInitialVlansExpansionVlan1" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansExpansionVlan1 {

};
```


### DataAwsccEvsEnvironmentInitialVlansExpansionVlan2 <a name="DataAwsccEvsEnvironmentInitialVlansExpansionVlan2" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansExpansionVlan2 {

};
```


### DataAwsccEvsEnvironmentInitialVlansHcx <a name="DataAwsccEvsEnvironmentInitialVlansHcx" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcx.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansHcx {

};
```


### DataAwsccEvsEnvironmentInitialVlansNsxUpLink <a name="DataAwsccEvsEnvironmentInitialVlansNsxUpLink" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansNsxUpLink {

};
```


### DataAwsccEvsEnvironmentInitialVlansVmkManagement <a name="DataAwsccEvsEnvironmentInitialVlansVmkManagement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVmkManagement {

};
```


### DataAwsccEvsEnvironmentInitialVlansVmManagement <a name="DataAwsccEvsEnvironmentInitialVlansVmManagement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVmManagement {

};
```


### DataAwsccEvsEnvironmentInitialVlansVMotion <a name="DataAwsccEvsEnvironmentInitialVlansVMotion" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVMotion {

};
```


### DataAwsccEvsEnvironmentInitialVlansVSan <a name="DataAwsccEvsEnvironmentInitialVlansVSan" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVSan {

};
```


### DataAwsccEvsEnvironmentInitialVlansVTep <a name="DataAwsccEvsEnvironmentInitialVlansVTep" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTep.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVTep {

};
```


### DataAwsccEvsEnvironmentLicenseInfo <a name="DataAwsccEvsEnvironmentLicenseInfo" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentLicenseInfo {

};
```


### DataAwsccEvsEnvironmentServiceAccessSecurityGroups <a name="DataAwsccEvsEnvironmentServiceAccessSecurityGroups" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentServiceAccessSecurityGroups {

};
```


### DataAwsccEvsEnvironmentTags <a name="DataAwsccEvsEnvironmentTags" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentTags {

};
```


### DataAwsccEvsEnvironmentVcfHostnames <a name="DataAwsccEvsEnvironmentVcfHostnames" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentVcfHostnames {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEvsEnvironmentChecksList <a name="DataAwsccEvsEnvironmentChecksList" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.get"></a>

```csharp
private DataAwsccEvsEnvironmentChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEvsEnvironmentChecksOutputReference <a name="DataAwsccEvsEnvironmentChecksOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.impairedSince">ImpairedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecks">DataAwsccEvsEnvironmentChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImpairedSince`<sup>Required</sup> <a name="ImpairedSince" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.impairedSince"></a>

```csharp
public string ImpairedSince { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentChecks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecks">DataAwsccEvsEnvironmentChecks</a>

---


### DataAwsccEvsEnvironmentConnectivityInfoOutputReference <a name="DataAwsccEvsEnvironmentConnectivityInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentConnectivityInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings">PrivateRouteServerPeerings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfo">DataAwsccEvsEnvironmentConnectivityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateRouteServerPeerings`<sup>Required</sup> <a name="PrivateRouteServerPeerings" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings"></a>

```csharp
public string[] PrivateRouteServerPeerings { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentConnectivityInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfo">DataAwsccEvsEnvironmentConnectivityInfo</a>

---


### DataAwsccEvsEnvironmentCredentialsList <a name="DataAwsccEvsEnvironmentCredentialsList" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.get"></a>

```csharp
private DataAwsccEvsEnvironmentCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEvsEnvironmentCredentialsOutputReference <a name="DataAwsccEvsEnvironmentCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentials">DataAwsccEvsEnvironmentCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentials">DataAwsccEvsEnvironmentCredentials</a>

---


### DataAwsccEvsEnvironmentHostsList <a name="DataAwsccEvsEnvironmentHostsList" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentHostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.get"></a>

```csharp
private DataAwsccEvsEnvironmentHostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEvsEnvironmentHostsOutputReference <a name="DataAwsccEvsEnvironmentHostsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.dedicatedHostId">DedicatedHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.placementGroupId">PlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHosts">DataAwsccEvsEnvironmentHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DedicatedHostId`<sup>Required</sup> <a name="DedicatedHostId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.dedicatedHostId"></a>

```csharp
public string DedicatedHostId { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `PlacementGroupId`<sup>Required</sup> <a name="PlacementGroupId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.placementGroupId"></a>

```csharp
public string PlacementGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentHosts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHosts">DataAwsccEvsEnvironmentHosts</a>

---


### DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTep">DataAwsccEvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansEdgeVTep InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTep">DataAwsccEvsEnvironmentInitialVlansEdgeVTep</a>

---


### DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference <a name="DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1">DataAwsccEvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansExpansionVlan1 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1">DataAwsccEvsEnvironmentInitialVlansExpansionVlan1</a>

---


### DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference <a name="DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2">DataAwsccEvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansExpansionVlan2 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2">DataAwsccEvsEnvironmentInitialVlansExpansionVlan2</a>

---


### DataAwsccEvsEnvironmentInitialVlansHcxOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansHcxOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansHcxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcx">DataAwsccEvsEnvironmentInitialVlansHcx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansHcx InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcx">DataAwsccEvsEnvironmentInitialVlansHcx</a>

---


### DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLink">DataAwsccEvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansNsxUpLink InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLink">DataAwsccEvsEnvironmentInitialVlansNsxUpLink</a>

---


### DataAwsccEvsEnvironmentInitialVlansOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.edgeVTep">EdgeVTep</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference">DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.expansionVlan1">ExpansionVlan1</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference">DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.expansionVlan2">ExpansionVlan2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference">DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.hcx">Hcx</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference">DataAwsccEvsEnvironmentInitialVlansHcxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId">HcxNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.isHcxPublic">IsHcxPublic</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.nsxUpLink">NsxUpLink</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference">DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vmkManagement">VmkManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference">DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vmManagement">VmManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference">DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vMotion">VMotion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference">DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vSan">VSan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference">DataAwsccEvsEnvironmentInitialVlansVSanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vTep">VTep</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference">DataAwsccEvsEnvironmentInitialVlansVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlans">DataAwsccEvsEnvironmentInitialVlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EdgeVTep`<sup>Required</sup> <a name="EdgeVTep" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.edgeVTep"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference EdgeVTep { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference">DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference</a>

---

##### `ExpansionVlan1`<sup>Required</sup> <a name="ExpansionVlan1" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.expansionVlan1"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference ExpansionVlan1 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference">DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference</a>

---

##### `ExpansionVlan2`<sup>Required</sup> <a name="ExpansionVlan2" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.expansionVlan2"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference ExpansionVlan2 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference">DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference</a>

---

##### `Hcx`<sup>Required</sup> <a name="Hcx" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.hcx"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansHcxOutputReference Hcx { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference">DataAwsccEvsEnvironmentInitialVlansHcxOutputReference</a>

---

##### `HcxNetworkAclId`<sup>Required</sup> <a name="HcxNetworkAclId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId"></a>

```csharp
public string HcxNetworkAclId { get; }
```

- *Type:* string

---

##### `IsHcxPublic`<sup>Required</sup> <a name="IsHcxPublic" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.isHcxPublic"></a>

```csharp
public IResolvable IsHcxPublic { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NsxUpLink`<sup>Required</sup> <a name="NsxUpLink" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.nsxUpLink"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference NsxUpLink { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference">DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference</a>

---

##### `VmkManagement`<sup>Required</sup> <a name="VmkManagement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vmkManagement"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference VmkManagement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference">DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference</a>

---

##### `VmManagement`<sup>Required</sup> <a name="VmManagement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vmManagement"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference VmManagement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference">DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference</a>

---

##### `VMotion`<sup>Required</sup> <a name="VMotion" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vMotion"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference VMotion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference">DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference</a>

---

##### `VSan`<sup>Required</sup> <a name="VSan" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vSan"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVSanOutputReference VSan { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference">DataAwsccEvsEnvironmentInitialVlansVSanOutputReference</a>

---

##### `VTep`<sup>Required</sup> <a name="VTep" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vTep"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVTepOutputReference VTep { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference">DataAwsccEvsEnvironmentInitialVlansVTepOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlans InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlans">DataAwsccEvsEnvironmentInitialVlans</a>

---


### DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagement">DataAwsccEvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVmkManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagement">DataAwsccEvsEnvironmentInitialVlansVmkManagement</a>

---


### DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagement">DataAwsccEvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVmManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagement">DataAwsccEvsEnvironmentInitialVlansVmManagement</a>

---


### DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotion">DataAwsccEvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVMotion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotion">DataAwsccEvsEnvironmentInitialVlansVMotion</a>

---


### DataAwsccEvsEnvironmentInitialVlansVSanOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVSanOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVSanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSan">DataAwsccEvsEnvironmentInitialVlansVSan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVSan InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSan">DataAwsccEvsEnvironmentInitialVlansVSan</a>

---


### DataAwsccEvsEnvironmentInitialVlansVTepOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVTepOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentInitialVlansVTepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTep">DataAwsccEvsEnvironmentInitialVlansVTep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentInitialVlansVTep InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTep">DataAwsccEvsEnvironmentInitialVlansVTep</a>

---


### DataAwsccEvsEnvironmentLicenseInfoOutputReference <a name="DataAwsccEvsEnvironmentLicenseInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentLicenseInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.solutionKey">SolutionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.vsanKey">VsanKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfo">DataAwsccEvsEnvironmentLicenseInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SolutionKey`<sup>Required</sup> <a name="SolutionKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.solutionKey"></a>

```csharp
public string SolutionKey { get; }
```

- *Type:* string

---

##### `VsanKey`<sup>Required</sup> <a name="VsanKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.vsanKey"></a>

```csharp
public string VsanKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentLicenseInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfo">DataAwsccEvsEnvironmentLicenseInfo</a>

---


### DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference <a name="DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroups">DataAwsccEvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentServiceAccessSecurityGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroups">DataAwsccEvsEnvironmentServiceAccessSecurityGroups</a>

---


### DataAwsccEvsEnvironmentTagsList <a name="DataAwsccEvsEnvironmentTagsList" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.get"></a>

```csharp
private DataAwsccEvsEnvironmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEvsEnvironmentTagsOutputReference <a name="DataAwsccEvsEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTags">DataAwsccEvsEnvironmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTags">DataAwsccEvsEnvironmentTags</a>

---


### DataAwsccEvsEnvironmentVcfHostnamesOutputReference <a name="DataAwsccEvsEnvironmentVcfHostnamesOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEvsEnvironmentVcfHostnamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder">CloudBuilder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsx">Nsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1">NsxEdge1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2">NsxEdge2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1">NsxManager1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2">NsxManager2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3">NsxManager3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.sddcManager">SddcManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.vCenter">VCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnames">DataAwsccEvsEnvironmentVcfHostnames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudBuilder`<sup>Required</sup> <a name="CloudBuilder" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder"></a>

```csharp
public string CloudBuilder { get; }
```

- *Type:* string

---

##### `Nsx`<sup>Required</sup> <a name="Nsx" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsx"></a>

```csharp
public string Nsx { get; }
```

- *Type:* string

---

##### `NsxEdge1`<sup>Required</sup> <a name="NsxEdge1" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1"></a>

```csharp
public string NsxEdge1 { get; }
```

- *Type:* string

---

##### `NsxEdge2`<sup>Required</sup> <a name="NsxEdge2" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2"></a>

```csharp
public string NsxEdge2 { get; }
```

- *Type:* string

---

##### `NsxManager1`<sup>Required</sup> <a name="NsxManager1" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1"></a>

```csharp
public string NsxManager1 { get; }
```

- *Type:* string

---

##### `NsxManager2`<sup>Required</sup> <a name="NsxManager2" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2"></a>

```csharp
public string NsxManager2 { get; }
```

- *Type:* string

---

##### `NsxManager3`<sup>Required</sup> <a name="NsxManager3" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3"></a>

```csharp
public string NsxManager3 { get; }
```

- *Type:* string

---

##### `SddcManager`<sup>Required</sup> <a name="SddcManager" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.sddcManager"></a>

```csharp
public string SddcManager { get; }
```

- *Type:* string

---

##### `VCenter`<sup>Required</sup> <a name="VCenter" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.vCenter"></a>

```csharp
public string VCenter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEvsEnvironmentVcfHostnames InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnames">DataAwsccEvsEnvironmentVcfHostnames</a>

---



