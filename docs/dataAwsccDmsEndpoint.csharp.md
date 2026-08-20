# `dataAwsccDmsEndpoint` Submodule <a name="`dataAwsccDmsEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsEndpoint <a name="DataAwsccDmsEndpoint" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint awscc_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpoint(Construct Scope, string Id, DataAwsccDmsEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig">DataAwsccDmsEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig">DataAwsccDmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDmsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDmsEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDmsEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDmsEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDmsEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDmsEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference">DataAwsccDmsEndpointDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dynamoDbSettings">DynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference">DataAwsccDmsEndpointDynamoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference">DataAwsccDmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointArn">EndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointIdentifier">EndpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.engineName">EngineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.gcpMySqlSettings">GcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference">DataAwsccDmsEndpointGcpMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.ibmDb2Settings">IbmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference">DataAwsccDmsEndpointIbmDb2SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference">DataAwsccDmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference">DataAwsccDmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mongoDbSettings">MongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference">DataAwsccDmsEndpointMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mySqlSettings">MySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference">DataAwsccDmsEndpointMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.neptuneSettings">NeptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference">DataAwsccDmsEndpointNeptuneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference">DataAwsccDmsEndpointOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.postgreSqlSettings">PostgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference">DataAwsccDmsEndpointPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference">DataAwsccDmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference">DataAwsccDmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.s3Settings">S3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference">DataAwsccDmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sybaseSettings">SybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference">DataAwsccDmsEndpointSybaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList">DataAwsccDmsEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DocDbSettings`<sup>Required</sup> <a name="DocDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.docDbSettings"></a>

```csharp
public DataAwsccDmsEndpointDocDbSettingsOutputReference DocDbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference">DataAwsccDmsEndpointDocDbSettingsOutputReference</a>

---

##### `DynamoDbSettings`<sup>Required</sup> <a name="DynamoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dynamoDbSettings"></a>

```csharp
public DataAwsccDmsEndpointDynamoDbSettingsOutputReference DynamoDbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference">DataAwsccDmsEndpointDynamoDbSettingsOutputReference</a>

---

##### `ElasticsearchSettings`<sup>Required</sup> <a name="ElasticsearchSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.elasticsearchSettings"></a>

```csharp
public DataAwsccDmsEndpointElasticsearchSettingsOutputReference ElasticsearchSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference">DataAwsccDmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointArn"></a>

```csharp
public string EndpointArn { get; }
```

- *Type:* string

---

##### `EndpointIdentifier`<sup>Required</sup> <a name="EndpointIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointIdentifier"></a>

```csharp
public string EndpointIdentifier { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.engineName"></a>

```csharp
public string EngineName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `ExtraConnectionAttributes`<sup>Required</sup> <a name="ExtraConnectionAttributes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.extraConnectionAttributes"></a>

```csharp
public string ExtraConnectionAttributes { get; }
```

- *Type:* string

---

##### `GcpMySqlSettings`<sup>Required</sup> <a name="GcpMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.gcpMySqlSettings"></a>

```csharp
public DataAwsccDmsEndpointGcpMySqlSettingsOutputReference GcpMySqlSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference">DataAwsccDmsEndpointGcpMySqlSettingsOutputReference</a>

---

##### `IbmDb2Settings`<sup>Required</sup> <a name="IbmDb2Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.ibmDb2Settings"></a>

```csharp
public DataAwsccDmsEndpointIbmDb2SettingsOutputReference IbmDb2Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference">DataAwsccDmsEndpointIbmDb2SettingsOutputReference</a>

---

##### `KafkaSettings`<sup>Required</sup> <a name="KafkaSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kafkaSettings"></a>

```csharp
public DataAwsccDmsEndpointKafkaSettingsOutputReference KafkaSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference">DataAwsccDmsEndpointKafkaSettingsOutputReference</a>

---

##### `KinesisSettings`<sup>Required</sup> <a name="KinesisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kinesisSettings"></a>

```csharp
public DataAwsccDmsEndpointKinesisSettingsOutputReference KinesisSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference">DataAwsccDmsEndpointKinesisSettingsOutputReference</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MicrosoftSqlServerSettings`<sup>Required</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.microsoftSqlServerSettings"></a>

```csharp
public DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference MicrosoftSqlServerSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference</a>

---

##### `MongoDbSettings`<sup>Required</sup> <a name="MongoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mongoDbSettings"></a>

```csharp
public DataAwsccDmsEndpointMongoDbSettingsOutputReference MongoDbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference">DataAwsccDmsEndpointMongoDbSettingsOutputReference</a>

---

##### `MySqlSettings`<sup>Required</sup> <a name="MySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mySqlSettings"></a>

```csharp
public DataAwsccDmsEndpointMySqlSettingsOutputReference MySqlSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference">DataAwsccDmsEndpointMySqlSettingsOutputReference</a>

---

##### `NeptuneSettings`<sup>Required</sup> <a name="NeptuneSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.neptuneSettings"></a>

```csharp
public DataAwsccDmsEndpointNeptuneSettingsOutputReference NeptuneSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference">DataAwsccDmsEndpointNeptuneSettingsOutputReference</a>

---

##### `OracleSettings`<sup>Required</sup> <a name="OracleSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.oracleSettings"></a>

```csharp
public DataAwsccDmsEndpointOracleSettingsOutputReference OracleSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference">DataAwsccDmsEndpointOracleSettingsOutputReference</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PostgreSqlSettings`<sup>Required</sup> <a name="PostgreSqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.postgreSqlSettings"></a>

```csharp
public DataAwsccDmsEndpointPostgreSqlSettingsOutputReference PostgreSqlSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference">DataAwsccDmsEndpointPostgreSqlSettingsOutputReference</a>

---

##### `RedisSettings`<sup>Required</sup> <a name="RedisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redisSettings"></a>

```csharp
public DataAwsccDmsEndpointRedisSettingsOutputReference RedisSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference">DataAwsccDmsEndpointRedisSettingsOutputReference</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redshiftSettings"></a>

```csharp
public DataAwsccDmsEndpointRedshiftSettingsOutputReference RedshiftSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference">DataAwsccDmsEndpointRedshiftSettingsOutputReference</a>

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `S3Settings`<sup>Required</sup> <a name="S3Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.s3Settings"></a>

```csharp
public DataAwsccDmsEndpointS3SettingsOutputReference S3Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference">DataAwsccDmsEndpointS3SettingsOutputReference</a>

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `SybaseSettings`<sup>Required</sup> <a name="SybaseSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sybaseSettings"></a>

```csharp
public DataAwsccDmsEndpointSybaseSettingsOutputReference SybaseSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference">DataAwsccDmsEndpointSybaseSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tags"></a>

```csharp
public DataAwsccDmsEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList">DataAwsccDmsEndpointTagsList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsEndpointConfig <a name="DataAwsccDmsEndpointConfig" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint#id DataAwsccDmsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsEndpointDocDbSettings <a name="DataAwsccDmsEndpointDocDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointDocDbSettings {

};
```


### DataAwsccDmsEndpointDynamoDbSettings <a name="DataAwsccDmsEndpointDynamoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointDynamoDbSettings {

};
```


### DataAwsccDmsEndpointElasticsearchSettings <a name="DataAwsccDmsEndpointElasticsearchSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointElasticsearchSettings {

};
```


### DataAwsccDmsEndpointGcpMySqlSettings <a name="DataAwsccDmsEndpointGcpMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointGcpMySqlSettings {

};
```


### DataAwsccDmsEndpointIbmDb2Settings <a name="DataAwsccDmsEndpointIbmDb2Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointIbmDb2Settings {

};
```


### DataAwsccDmsEndpointKafkaSettings <a name="DataAwsccDmsEndpointKafkaSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointKafkaSettings {

};
```


### DataAwsccDmsEndpointKinesisSettings <a name="DataAwsccDmsEndpointKinesisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointKinesisSettings {

};
```


### DataAwsccDmsEndpointMicrosoftSqlServerSettings <a name="DataAwsccDmsEndpointMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointMicrosoftSqlServerSettings {

};
```


### DataAwsccDmsEndpointMongoDbSettings <a name="DataAwsccDmsEndpointMongoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointMongoDbSettings {

};
```


### DataAwsccDmsEndpointMySqlSettings <a name="DataAwsccDmsEndpointMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointMySqlSettings {

};
```


### DataAwsccDmsEndpointNeptuneSettings <a name="DataAwsccDmsEndpointNeptuneSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointNeptuneSettings {

};
```


### DataAwsccDmsEndpointOracleSettings <a name="DataAwsccDmsEndpointOracleSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointOracleSettings {

};
```


### DataAwsccDmsEndpointPostgreSqlSettings <a name="DataAwsccDmsEndpointPostgreSqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointPostgreSqlSettings {

};
```


### DataAwsccDmsEndpointRedisSettings <a name="DataAwsccDmsEndpointRedisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointRedisSettings {

};
```


### DataAwsccDmsEndpointRedshiftSettings <a name="DataAwsccDmsEndpointRedshiftSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointRedshiftSettings {

};
```


### DataAwsccDmsEndpointS3Settings <a name="DataAwsccDmsEndpointS3Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointS3Settings {

};
```


### DataAwsccDmsEndpointSybaseSettings <a name="DataAwsccDmsEndpointSybaseSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointSybaseSettings {

};
```


### DataAwsccDmsEndpointTags <a name="DataAwsccDmsEndpointTags" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsEndpointDocDbSettingsOutputReference <a name="DataAwsccDmsEndpointDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointDocDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings">DataAwsccDmsEndpointDocDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate"></a>

```csharp
public double DocsToInvestigate { get; }
```

- *Type:* double

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.extractDocId"></a>

```csharp
public IResolvable ExtractDocId { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointDocDbSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings">DataAwsccDmsEndpointDocDbSettings</a>

---


### DataAwsccDmsEndpointDynamoDbSettingsOutputReference <a name="DataAwsccDmsEndpointDynamoDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointDynamoDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings">DataAwsccDmsEndpointDynamoDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointDynamoDbSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings">DataAwsccDmsEndpointDynamoDbSettings</a>

---


### DataAwsccDmsEndpointElasticsearchSettingsOutputReference <a name="DataAwsccDmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointElasticsearchSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">EndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings">DataAwsccDmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```csharp
public string EndpointUri { get; }
```

- *Type:* string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; }
```

- *Type:* double

---

##### `FullLoadErrorPercentage`<sup>Required</sup> <a name="FullLoadErrorPercentage" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```csharp
public double FullLoadErrorPercentage { get; }
```

- *Type:* double

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointElasticsearchSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings">DataAwsccDmsEndpointElasticsearchSettings</a>

---


### DataAwsccDmsEndpointGcpMySqlSettingsOutputReference <a name="DataAwsccDmsEndpointGcpMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointGcpMySqlSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval">EventsPollInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone">ServerTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings">DataAwsccDmsEndpointGcpMySqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `CleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```csharp
public IResolvable CleanSourceMetadataOnMismatch { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EventsPollInterval`<sup>Required</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```csharp
public double EventsPollInterval { get; }
```

- *Type:* double

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParallelLoadThreads`<sup>Required</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```csharp
public double ParallelLoadThreads { get; }
```

- *Type:* double

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `ServerTimezone`<sup>Required</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone"></a>

```csharp
public string ServerTimezone { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointGcpMySqlSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings">DataAwsccDmsEndpointGcpMySqlSettings</a>

---


### DataAwsccDmsEndpointIbmDb2SettingsOutputReference <a name="DataAwsccDmsEndpointIbmDb2SettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointIbmDb2SettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.currentLsn">CurrentLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles">KeepCsvFiles</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout">LoadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead">MaxKBytesPerRead</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges">SetDataCaptureChanges</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize">WriteBufferSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings">DataAwsccDmsEndpointIbmDb2Settings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentLsn`<sup>Required</sup> <a name="CurrentLsn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.currentLsn"></a>

```csharp
public string CurrentLsn { get; }
```

- *Type:* string

---

##### `KeepCsvFiles`<sup>Required</sup> <a name="KeepCsvFiles" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles"></a>

```csharp
public IResolvable KeepCsvFiles { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LoadTimeout`<sup>Required</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout"></a>

```csharp
public double LoadTimeout { get; }
```

- *Type:* double

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `MaxKBytesPerRead`<sup>Required</sup> <a name="MaxKBytesPerRead" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead"></a>

```csharp
public double MaxKBytesPerRead { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `SetDataCaptureChanges`<sup>Required</sup> <a name="SetDataCaptureChanges" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges"></a>

```csharp
public IResolvable SetDataCaptureChanges { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `WriteBufferSize`<sup>Required</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize"></a>

```csharp
public double WriteBufferSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointIbmDb2Settings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings">DataAwsccDmsEndpointIbmDb2Settings</a>

---


### DataAwsccDmsEndpointKafkaSettingsOutputReference <a name="DataAwsccDmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointKafkaSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.broker">Broker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslPassword">SaslPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslUserName">SaslUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings">DataAwsccDmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```csharp
public string Broker { get; }
```

- *Type:* string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public IResolvable IncludeControlDetails { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public IResolvable IncludeNullAndEmpty { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public IResolvable IncludePartitionValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public IResolvable IncludeTableAlterOperations { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public IResolvable IncludeTransactionDetails { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; }
```

- *Type:* double

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```csharp
public IResolvable NoHexPrefix { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public IResolvable PartitionIncludeSchemaTable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SaslPassword`<sup>Required</sup> <a name="SaslPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```csharp
public string SaslPassword { get; }
```

- *Type:* string

---

##### `SaslUserName`<sup>Required</sup> <a name="SaslUserName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslUserName"></a>

```csharp
public string SaslUserName { get; }
```

- *Type:* string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientCertificateArn`<sup>Required</sup> <a name="SslClientCertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```csharp
public string SslClientCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientKeyArn`<sup>Required</sup> <a name="SslClientKeyArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```csharp
public string SslClientKeyArn { get; }
```

- *Type:* string

---

##### `SslClientKeyPassword`<sup>Required</sup> <a name="SslClientKeyPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```csharp
public string SslClientKeyPassword { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointKafkaSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings">DataAwsccDmsEndpointKafkaSettings</a>

---


### DataAwsccDmsEndpointKinesisSettingsOutputReference <a name="DataAwsccDmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointKinesisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings">DataAwsccDmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public IResolvable IncludeControlDetails { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public IResolvable IncludeNullAndEmpty { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public IResolvable IncludePartitionValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public IResolvable IncludeTableAlterOperations { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public IResolvable IncludeTransactionDetails { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.noHexPrefix"></a>

```csharp
public IResolvable NoHexPrefix { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public IResolvable PartitionIncludeSchemaTable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointKinesisSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings">DataAwsccDmsEndpointKinesisSettings</a>

---


### DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference <a name="DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize">BcpPacketSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup">ControlTablesFileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup">ForceLobLookup</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode">QuerySingleAlwaysOnNode</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly">ReadBackupOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy">SafeguardPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode">TlogAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar">TrimSpaceInChar</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad">UseBcpFullLoad</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice">UseThirdPartyBackupDevice</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings">DataAwsccDmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BcpPacketSize`<sup>Required</sup> <a name="BcpPacketSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize"></a>

```csharp
public double BcpPacketSize { get; }
```

- *Type:* double

---

##### `ControlTablesFileGroup`<sup>Required</sup> <a name="ControlTablesFileGroup" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup"></a>

```csharp
public string ControlTablesFileGroup { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ForceLobLookup`<sup>Required</sup> <a name="ForceLobLookup" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup"></a>

```csharp
public IResolvable ForceLobLookup { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `QuerySingleAlwaysOnNode`<sup>Required</sup> <a name="QuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode"></a>

```csharp
public IResolvable QuerySingleAlwaysOnNode { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ReadBackupOnly`<sup>Required</sup> <a name="ReadBackupOnly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly"></a>

```csharp
public IResolvable ReadBackupOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SafeguardPolicy`<sup>Required</sup> <a name="SafeguardPolicy" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy"></a>

```csharp
public string SafeguardPolicy { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `TlogAccessMode`<sup>Required</sup> <a name="TlogAccessMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode"></a>

```csharp
public string TlogAccessMode { get; }
```

- *Type:* string

---

##### `TrimSpaceInChar`<sup>Required</sup> <a name="TrimSpaceInChar" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar"></a>

```csharp
public IResolvable TrimSpaceInChar { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseBcpFullLoad`<sup>Required</sup> <a name="UseBcpFullLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad"></a>

```csharp
public IResolvable UseBcpFullLoad { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UseThirdPartyBackupDevice`<sup>Required</sup> <a name="UseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice"></a>

```csharp
public IResolvable UseThirdPartyBackupDevice { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointMicrosoftSqlServerSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings">DataAwsccDmsEndpointMicrosoftSqlServerSettings</a>

---


### DataAwsccDmsEndpointMongoDbSettingsOutputReference <a name="DataAwsccDmsEndpointMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointMongoDbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings">DataAwsccDmsEndpointMongoDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; }
```

- *Type:* string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authSource"></a>

```csharp
public string AuthSource { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate"></a>

```csharp
public string DocsToInvestigate { get; }
```

- *Type:* string

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.extractDocId"></a>

```csharp
public string ExtractDocId { get; }
```

- *Type:* string

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointMongoDbSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings">DataAwsccDmsEndpointMongoDbSettings</a>

---


### DataAwsccDmsEndpointMySqlSettingsOutputReference <a name="DataAwsccDmsEndpointMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointMySqlSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval">EventsPollInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.serverTimezone">ServerTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.targetDbType">TargetDbType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings">DataAwsccDmsEndpointMySqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `CleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```csharp
public IResolvable CleanSourceMetadataOnMismatch { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EventsPollInterval`<sup>Required</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```csharp
public double EventsPollInterval { get; }
```

- *Type:* double

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParallelLoadThreads`<sup>Required</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```csharp
public double ParallelLoadThreads { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerTimezone`<sup>Required</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.serverTimezone"></a>

```csharp
public string ServerTimezone { get; }
```

- *Type:* string

---

##### `TargetDbType`<sup>Required</sup> <a name="TargetDbType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.targetDbType"></a>

```csharp
public string TargetDbType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointMySqlSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings">DataAwsccDmsEndpointMySqlSettings</a>

---


### DataAwsccDmsEndpointNeptuneSettingsOutputReference <a name="DataAwsccDmsEndpointNeptuneSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointNeptuneSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled">IamAuthEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount">MaxRetryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder">S3BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings">DataAwsccDmsEndpointNeptuneSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; }
```

- *Type:* double

---

##### `IamAuthEnabled`<sup>Required</sup> <a name="IamAuthEnabled" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled"></a>

```csharp
public IResolvable IamAuthEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `MaxRetryCount`<sup>Required</sup> <a name="MaxRetryCount" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount"></a>

```csharp
public double MaxRetryCount { get; }
```

- *Type:* double

---

##### `S3BucketFolder`<sup>Required</sup> <a name="S3BucketFolder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder"></a>

```csharp
public string S3BucketFolder { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointNeptuneSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings">DataAwsccDmsEndpointNeptuneSettings</a>

---


### DataAwsccDmsEndpointOracleSettingsOutputReference <a name="DataAwsccDmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointOracleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">AccessAlternateDirectly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">AdditionalArchivedLogDestId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">AddSupplementalLogging</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables">AllowSelectNestedTables</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">ArchivedLogDestId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">ArchivedLogsOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmPassword">AsmPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmServer">AsmServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmUser">AsmUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">CharLengthSemantics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathNoLog">DirectPathNoLog</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">DirectPathParallelLoad</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">EnableHomogenousTablespace</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">ExtraArchivedLogDestIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">NumberDatatypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">OraclePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">ParallelAsmReadThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">ReadAheadBlocks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">ReadTableSpaceName</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">ReplacePathPrefix</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.retryInterval">RetryInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">SecurityDbEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">SecurityDbEncryptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">SpatialDataOptionToGeoJsonFunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">StandbyDelayTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">UseAlternateFolderForOnline</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useBFile">UseBFile</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">UseDirectPathFullLoad</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useLogminerReader">UseLogminerReader</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.usePathPrefix">UsePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings">DataAwsccDmsEndpointOracleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessAlternateDirectly`<sup>Required</sup> <a name="AccessAlternateDirectly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```csharp
public IResolvable AccessAlternateDirectly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AdditionalArchivedLogDestId`<sup>Required</sup> <a name="AdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```csharp
public double AdditionalArchivedLogDestId { get; }
```

- *Type:* double

---

##### `AddSupplementalLogging`<sup>Required</sup> <a name="AddSupplementalLogging" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```csharp
public IResolvable AddSupplementalLogging { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowSelectNestedTables`<sup>Required</sup> <a name="AllowSelectNestedTables" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables"></a>

```csharp
public IResolvable AllowSelectNestedTables { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ArchivedLogDestId`<sup>Required</sup> <a name="ArchivedLogDestId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```csharp
public double ArchivedLogDestId { get; }
```

- *Type:* double

---

##### `ArchivedLogsOnly`<sup>Required</sup> <a name="ArchivedLogsOnly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```csharp
public IResolvable ArchivedLogsOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AsmPassword`<sup>Required</sup> <a name="AsmPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```csharp
public string AsmPassword { get; }
```

- *Type:* string

---

##### `AsmServer`<sup>Required</sup> <a name="AsmServer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```csharp
public string AsmServer { get; }
```

- *Type:* string

---

##### `AsmUser`<sup>Required</sup> <a name="AsmUser" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```csharp
public string AsmUser { get; }
```

- *Type:* string

---

##### `CharLengthSemantics`<sup>Required</sup> <a name="CharLengthSemantics" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```csharp
public string CharLengthSemantics { get; }
```

- *Type:* string

---

##### `DirectPathNoLog`<sup>Required</sup> <a name="DirectPathNoLog" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```csharp
public IResolvable DirectPathNoLog { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DirectPathParallelLoad`<sup>Required</sup> <a name="DirectPathParallelLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```csharp
public IResolvable DirectPathParallelLoad { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnableHomogenousTablespace`<sup>Required</sup> <a name="EnableHomogenousTablespace" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```csharp
public IResolvable EnableHomogenousTablespace { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ExtraArchivedLogDestIds`<sup>Required</sup> <a name="ExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```csharp
public double[] ExtraArchivedLogDestIds { get; }
```

- *Type:* double[]

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```csharp
public IResolvable FailTasksOnLobTruncation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NumberDatatypeScale`<sup>Required</sup> <a name="NumberDatatypeScale" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```csharp
public double NumberDatatypeScale { get; }
```

- *Type:* double

---

##### `OraclePathPrefix`<sup>Required</sup> <a name="OraclePathPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```csharp
public string OraclePathPrefix { get; }
```

- *Type:* string

---

##### `ParallelAsmReadThreads`<sup>Required</sup> <a name="ParallelAsmReadThreads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```csharp
public double ParallelAsmReadThreads { get; }
```

- *Type:* double

---

##### `ReadAheadBlocks`<sup>Required</sup> <a name="ReadAheadBlocks" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```csharp
public double ReadAheadBlocks { get; }
```

- *Type:* double

---

##### `ReadTableSpaceName`<sup>Required</sup> <a name="ReadTableSpaceName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```csharp
public IResolvable ReadTableSpaceName { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ReplacePathPrefix`<sup>Required</sup> <a name="ReplacePathPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```csharp
public IResolvable ReplacePathPrefix { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RetryInterval`<sup>Required</sup> <a name="RetryInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```csharp
public double RetryInterval { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```csharp
public string SecretsManagerOracleAsmSecretId { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `SecurityDbEncryption`<sup>Required</sup> <a name="SecurityDbEncryption" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```csharp
public string SecurityDbEncryption { get; }
```

- *Type:* string

---

##### `SecurityDbEncryptionName`<sup>Required</sup> <a name="SecurityDbEncryptionName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```csharp
public string SecurityDbEncryptionName { get; }
```

- *Type:* string

---

##### `SpatialDataOptionToGeoJsonFunctionName`<sup>Required</sup> <a name="SpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```csharp
public string SpatialDataOptionToGeoJsonFunctionName { get; }
```

- *Type:* string

---

##### `StandbyDelayTime`<sup>Required</sup> <a name="StandbyDelayTime" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```csharp
public double StandbyDelayTime { get; }
```

- *Type:* double

---

##### `UseAlternateFolderForOnline`<sup>Required</sup> <a name="UseAlternateFolderForOnline" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```csharp
public IResolvable UseAlternateFolderForOnline { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseBFile`<sup>Required</sup> <a name="UseBFile" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useBFile"></a>

```csharp
public IResolvable UseBFile { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseDirectPathFullLoad`<sup>Required</sup> <a name="UseDirectPathFullLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```csharp
public IResolvable UseDirectPathFullLoad { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseLogminerReader`<sup>Required</sup> <a name="UseLogminerReader" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```csharp
public IResolvable UseLogminerReader { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UsePathPrefix`<sup>Required</sup> <a name="UsePathPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```csharp
public string UsePathPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointOracleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings">DataAwsccDmsEndpointOracleSettings</a>

---


### DataAwsccDmsEndpointPostgreSqlSettingsOutputReference <a name="DataAwsccDmsEndpointPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointPostgreSqlSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls">CaptureDdls</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode">DatabaseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout">ExecuteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.slotName">SlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings">DataAwsccDmsEndpointPostgreSqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `BabelfishDatabaseName`<sup>Required</sup> <a name="BabelfishDatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName"></a>

```csharp
public string BabelfishDatabaseName { get; }
```

- *Type:* string

---

##### `CaptureDdls`<sup>Required</sup> <a name="CaptureDdls" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls"></a>

```csharp
public IResolvable CaptureDdls { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DatabaseMode`<sup>Required</sup> <a name="DatabaseMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode"></a>

```csharp
public string DatabaseMode { get; }
```

- *Type:* string

---

##### `DdlArtifactsSchema`<sup>Required</sup> <a name="DdlArtifactsSchema" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema"></a>

```csharp
public string DdlArtifactsSchema { get; }
```

- *Type:* string

---

##### `ExecuteTimeout`<sup>Required</sup> <a name="ExecuteTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout"></a>

```csharp
public double ExecuteTimeout { get; }
```

- *Type:* double

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```csharp
public IResolvable FailTasksOnLobTruncation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HeartbeatEnable`<sup>Required</sup> <a name="HeartbeatEnable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable"></a>

```csharp
public IResolvable HeartbeatEnable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HeartbeatFrequency`<sup>Required</sup> <a name="HeartbeatFrequency" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency"></a>

```csharp
public double HeartbeatFrequency { get; }
```

- *Type:* double

---

##### `HeartbeatSchema`<sup>Required</sup> <a name="HeartbeatSchema" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema"></a>

```csharp
public string HeartbeatSchema { get; }
```

- *Type:* string

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```csharp
public IResolvable MapBooleanAsBoolean { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.slotName"></a>

```csharp
public string SlotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointPostgreSqlSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings">DataAwsccDmsEndpointPostgreSqlSettings</a>

---


### DataAwsccDmsEndpointRedisSettingsOutputReference <a name="DataAwsccDmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointRedisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authPassword">AuthPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authUserName">AuthUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings">DataAwsccDmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```csharp
public string AuthPassword { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```csharp
public string AuthUserName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslSecurityProtocol`<sup>Required</sup> <a name="SslSecurityProtocol" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```csharp
public string SslSecurityProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointRedisSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings">DataAwsccDmsEndpointRedisSettings</a>

---


### DataAwsccDmsEndpointRedshiftSettingsOutputReference <a name="DataAwsccDmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointRedshiftSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate">AcceptAnyDate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.compUpdate">CompUpdate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull">EmptyAsNull</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.explicitIds">ExplicitIds</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams">FileTransferUploadStreams</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.loadTimeout">LoadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.removeQuotes">RemoveQuotes</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceChars">ReplaceChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars">ReplaceInvalidChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.timeFormat">TimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.trimBlanks">TrimBlanks</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.truncateColumns">TruncateColumns</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize">WriteBufferSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings">DataAwsccDmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptAnyDate`<sup>Required</sup> <a name="AcceptAnyDate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate"></a>

```csharp
public IResolvable AcceptAnyDate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames"></a>

```csharp
public IResolvable CaseSensitiveNames { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CompUpdate`<sup>Required</sup> <a name="CompUpdate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.compUpdate"></a>

```csharp
public IResolvable CompUpdate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; }
```

- *Type:* double

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `EmptyAsNull`<sup>Required</sup> <a name="EmptyAsNull" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull"></a>

```csharp
public IResolvable EmptyAsNull { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `ExplicitIds`<sup>Required</sup> <a name="ExplicitIds" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.explicitIds"></a>

```csharp
public IResolvable ExplicitIds { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FileTransferUploadStreams`<sup>Required</sup> <a name="FileTransferUploadStreams" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams"></a>

```csharp
public double FileTransferUploadStreams { get; }
```

- *Type:* double

---

##### `LoadTimeout`<sup>Required</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.loadTimeout"></a>

```csharp
public double LoadTimeout { get; }
```

- *Type:* double

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```csharp
public IResolvable MapBooleanAsBoolean { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `RemoveQuotes`<sup>Required</sup> <a name="RemoveQuotes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.removeQuotes"></a>

```csharp
public IResolvable RemoveQuotes { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ReplaceChars`<sup>Required</sup> <a name="ReplaceChars" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceChars"></a>

```csharp
public string ReplaceChars { get; }
```

- *Type:* string

---

##### `ReplaceInvalidChars`<sup>Required</sup> <a name="ReplaceInvalidChars" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars"></a>

```csharp
public string ReplaceInvalidChars { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.timeFormat"></a>

```csharp
public string TimeFormat { get; }
```

- *Type:* string

---

##### `TrimBlanks`<sup>Required</sup> <a name="TrimBlanks" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.trimBlanks"></a>

```csharp
public IResolvable TrimBlanks { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TruncateColumns`<sup>Required</sup> <a name="TruncateColumns" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.truncateColumns"></a>

```csharp
public IResolvable TruncateColumns { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `WriteBufferSize`<sup>Required</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize"></a>

```csharp
public double WriteBufferSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointRedshiftSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings">DataAwsccDmsEndpointRedshiftSettings</a>

---


### DataAwsccDmsEndpointS3SettingsOutputReference <a name="DataAwsccDmsEndpointS3SettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointS3SettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addColumnName">AddColumnName</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcPath">CdcPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvDelimiter">CsvDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNullValue">CsvNullValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataFormat">DataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataPageSize">DataPageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.enableStatistics">EnableStatistics</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encodingType">EncodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">GlueCatalogGeneration</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetVersion">ParquetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.preserveTransactions">PreserveTransactions</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rfc4180">Rfc4180</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rowGroupLength">RowGroupLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.timestampColumnName">TimestampColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings">DataAwsccDmsEndpointS3Settings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddColumnName`<sup>Required</sup> <a name="AddColumnName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```csharp
public IResolvable AddColumnName { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AddTrailingPaddingCharacter`<sup>Required</sup> <a name="AddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter"></a>

```csharp
public IResolvable AddTrailingPaddingCharacter { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CannedAclForObjects`<sup>Required</sup> <a name="CannedAclForObjects" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```csharp
public string CannedAclForObjects { get; }
```

- *Type:* string

---

##### `CdcInsertsAndUpdates`<sup>Required</sup> <a name="CdcInsertsAndUpdates" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```csharp
public IResolvable CdcInsertsAndUpdates { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CdcInsertsOnly`<sup>Required</sup> <a name="CdcInsertsOnly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```csharp
public IResolvable CdcInsertsOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CdcMaxBatchInterval`<sup>Required</sup> <a name="CdcMaxBatchInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```csharp
public double CdcMaxBatchInterval { get; }
```

- *Type:* double

---

##### `CdcMinFileSize`<sup>Required</sup> <a name="CdcMinFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```csharp
public double CdcMinFileSize { get; }
```

- *Type:* double

---

##### `CdcPath`<sup>Required</sup> <a name="CdcPath" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```csharp
public string CdcPath { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `CsvDelimiter`<sup>Required</sup> <a name="CsvDelimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```csharp
public string CsvDelimiter { get; }
```

- *Type:* string

---

##### `CsvNoSupValue`<sup>Required</sup> <a name="CsvNoSupValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```csharp
public string CsvNoSupValue { get; }
```

- *Type:* string

---

##### `CsvNullValue`<sup>Required</sup> <a name="CsvNullValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```csharp
public string CsvNullValue { get; }
```

- *Type:* string

---

##### `CsvRowDelimiter`<sup>Required</sup> <a name="CsvRowDelimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```csharp
public string CsvRowDelimiter { get; }
```

- *Type:* string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```csharp
public string DataFormat { get; }
```

- *Type:* string

---

##### `DataPageSize`<sup>Required</sup> <a name="DataPageSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```csharp
public double DataPageSize { get; }
```

- *Type:* double

---

##### `DatePartitionDelimiter`<sup>Required</sup> <a name="DatePartitionDelimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```csharp
public string DatePartitionDelimiter { get; }
```

- *Type:* string

---

##### `DatePartitionEnabled`<sup>Required</sup> <a name="DatePartitionEnabled" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```csharp
public IResolvable DatePartitionEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DatePartitionSequence`<sup>Required</sup> <a name="DatePartitionSequence" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```csharp
public string DatePartitionSequence { get; }
```

- *Type:* string

---

##### `DatePartitionTimezone`<sup>Required</sup> <a name="DatePartitionTimezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionTimezone"></a>

```csharp
public string DatePartitionTimezone { get; }
```

- *Type:* string

---

##### `DictPageSizeLimit`<sup>Required</sup> <a name="DictPageSizeLimit" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```csharp
public double DictPageSizeLimit { get; }
```

- *Type:* double

---

##### `EnableStatistics`<sup>Required</sup> <a name="EnableStatistics" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```csharp
public IResolvable EnableStatistics { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```csharp
public string EncodingType { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `ExternalTableDefinition`<sup>Required</sup> <a name="ExternalTableDefinition" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```csharp
public string ExternalTableDefinition { get; }
```

- *Type:* string

---

##### `GlueCatalogGeneration`<sup>Required</sup> <a name="GlueCatalogGeneration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```csharp
public IResolvable GlueCatalogGeneration { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IgnoreHeaderRows`<sup>Required</sup> <a name="IgnoreHeaderRows" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```csharp
public double IgnoreHeaderRows { get; }
```

- *Type:* double

---

##### `IncludeOpForFullLoad`<sup>Required</sup> <a name="IncludeOpForFullLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```csharp
public IResolvable IncludeOpForFullLoad { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParquetTimestampInMillisecond`<sup>Required</sup> <a name="ParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```csharp
public IResolvable ParquetTimestampInMillisecond { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ParquetVersion`<sup>Required</sup> <a name="ParquetVersion" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```csharp
public string ParquetVersion { get; }
```

- *Type:* string

---

##### `PreserveTransactions`<sup>Required</sup> <a name="PreserveTransactions" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```csharp
public IResolvable PreserveTransactions { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Rfc4180`<sup>Required</sup> <a name="Rfc4180" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```csharp
public IResolvable Rfc4180 { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RowGroupLength`<sup>Required</sup> <a name="RowGroupLength" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```csharp
public double RowGroupLength { get; }
```

- *Type:* double

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `TimestampColumnName`<sup>Required</sup> <a name="TimestampColumnName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```csharp
public string TimestampColumnName { get; }
```

- *Type:* string

---

##### `UseCsvNoSupValue`<sup>Required</sup> <a name="UseCsvNoSupValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```csharp
public IResolvable UseCsvNoSupValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```csharp
public IResolvable UseTaskStartTimeForFullLoadTimestamp { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointS3Settings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings">DataAwsccDmsEndpointS3Settings</a>

---


### DataAwsccDmsEndpointSybaseSettingsOutputReference <a name="DataAwsccDmsEndpointSybaseSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointSybaseSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings">DataAwsccDmsEndpointSybaseSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointSybaseSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings">DataAwsccDmsEndpointSybaseSettings</a>

---


### DataAwsccDmsEndpointTagsList <a name="DataAwsccDmsEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get"></a>

```csharp
private DataAwsccDmsEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDmsEndpointTagsOutputReference <a name="DataAwsccDmsEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDmsEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags">DataAwsccDmsEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDmsEndpointTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags">DataAwsccDmsEndpointTags</a>

---



