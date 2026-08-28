# `dataAwsccFinspaceEnvironment` Submodule <a name="`dataAwsccFinspaceEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFinspaceEnvironment <a name="DataAwsccFinspaceEnvironment" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/finspace_environment awscc_finspace_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironment(Construct Scope, string Id, DataAwsccFinspaceEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig">DataAwsccFinspaceEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig">DataAwsccFinspaceEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFinspaceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccFinspaceEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccFinspaceEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccFinspaceEnvironment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccFinspaceEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccFinspaceEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccFinspaceEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccFinspaceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/finspace_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFinspaceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dataBundles">DataBundles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dedicatedServiceAccountId">DedicatedServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentArn">EnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentUrl">EnvironmentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationMode">FederationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationParameters">FederationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference">DataAwsccFinspaceEnvironmentFederationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.sageMakerStudioDomainUrl">SageMakerStudioDomainUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.superuserParameters">SuperuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference">DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList">DataAwsccFinspaceEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DataBundles`<sup>Required</sup> <a name="DataBundles" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dataBundles"></a>

```csharp
public string[] DataBundles { get; }
```

- *Type:* string[]

---

##### `DedicatedServiceAccountId`<sup>Required</sup> <a name="DedicatedServiceAccountId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dedicatedServiceAccountId"></a>

```csharp
public string DedicatedServiceAccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentArn`<sup>Required</sup> <a name="EnvironmentArn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentArn"></a>

```csharp
public string EnvironmentArn { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `EnvironmentUrl`<sup>Required</sup> <a name="EnvironmentUrl" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentUrl"></a>

```csharp
public string EnvironmentUrl { get; }
```

- *Type:* string

---

##### `FederationMode`<sup>Required</sup> <a name="FederationMode" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationMode"></a>

```csharp
public string FederationMode { get; }
```

- *Type:* string

---

##### `FederationParameters`<sup>Required</sup> <a name="FederationParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationParameters"></a>

```csharp
public DataAwsccFinspaceEnvironmentFederationParametersOutputReference FederationParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference">DataAwsccFinspaceEnvironmentFederationParametersOutputReference</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SageMakerStudioDomainUrl`<sup>Required</sup> <a name="SageMakerStudioDomainUrl" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.sageMakerStudioDomainUrl"></a>

```csharp
public string SageMakerStudioDomainUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SuperuserParameters`<sup>Required</sup> <a name="SuperuserParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.superuserParameters"></a>

```csharp
public DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference SuperuserParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference">DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tags"></a>

```csharp
public DataAwsccFinspaceEnvironmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList">DataAwsccFinspaceEnvironmentTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFinspaceEnvironmentConfig <a name="DataAwsccFinspaceEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/finspace_environment#id DataAwsccFinspaceEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFinspaceEnvironmentFederationParameters <a name="DataAwsccFinspaceEnvironmentFederationParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentFederationParameters {

};
```


### DataAwsccFinspaceEnvironmentFederationParametersAttributeMap <a name="DataAwsccFinspaceEnvironmentFederationParametersAttributeMap" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentFederationParametersAttributeMap {

};
```


### DataAwsccFinspaceEnvironmentSuperuserParameters <a name="DataAwsccFinspaceEnvironmentSuperuserParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentSuperuserParameters {

};
```


### DataAwsccFinspaceEnvironmentTags <a name="DataAwsccFinspaceEnvironmentTags" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList <a name="DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.get"></a>

```csharp
private DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference <a name="DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap">DataAwsccFinspaceEnvironmentFederationParametersAttributeMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue"></a>

```csharp
public DataAwsccFinspaceEnvironmentFederationParametersAttributeMap InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap">DataAwsccFinspaceEnvironmentFederationParametersAttributeMap</a>

---


### DataAwsccFinspaceEnvironmentFederationParametersOutputReference <a name="DataAwsccFinspaceEnvironmentFederationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentFederationParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl">ApplicationCallBackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.attributeMap">AttributeMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList">DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName">FederationProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationUrn">FederationUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument">SamlMetadataDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl">SamlMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters">DataAwsccFinspaceEnvironmentFederationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationCallBackUrl`<sup>Required</sup> <a name="ApplicationCallBackUrl" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl"></a>

```csharp
public string ApplicationCallBackUrl { get; }
```

- *Type:* string

---

##### `AttributeMap`<sup>Required</sup> <a name="AttributeMap" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.attributeMap"></a>

```csharp
public DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList AttributeMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList">DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList</a>

---

##### `FederationProviderName`<sup>Required</sup> <a name="FederationProviderName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName"></a>

```csharp
public string FederationProviderName { get; }
```

- *Type:* string

---

##### `FederationUrn`<sup>Required</sup> <a name="FederationUrn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationUrn"></a>

```csharp
public string FederationUrn { get; }
```

- *Type:* string

---

##### `SamlMetadataDocument`<sup>Required</sup> <a name="SamlMetadataDocument" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument"></a>

```csharp
public string SamlMetadataDocument { get; }
```

- *Type:* string

---

##### `SamlMetadataUrl`<sup>Required</sup> <a name="SamlMetadataUrl" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl"></a>

```csharp
public string SamlMetadataUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccFinspaceEnvironmentFederationParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters">DataAwsccFinspaceEnvironmentFederationParameters</a>

---


### DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference <a name="DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters">DataAwsccFinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccFinspaceEnvironmentSuperuserParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters">DataAwsccFinspaceEnvironmentSuperuserParameters</a>

---


### DataAwsccFinspaceEnvironmentTagsList <a name="DataAwsccFinspaceEnvironmentTagsList" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.get"></a>

```csharp
private DataAwsccFinspaceEnvironmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccFinspaceEnvironmentTagsOutputReference <a name="DataAwsccFinspaceEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccFinspaceEnvironmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags">DataAwsccFinspaceEnvironmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccFinspaceEnvironmentTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags">DataAwsccFinspaceEnvironmentTags</a>

---



