# `dataAwsccDevopsagentService` Submodule <a name="`dataAwsccDevopsagentService` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsagentService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsagentService <a name="DataAwsccDevopsagentService" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/devopsagent_service awscc_devopsagent_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentService(Construct Scope, string Id, DataAwsccDevopsagentServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig">DataAwsccDevopsagentServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig">DataAwsccDevopsagentServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsagentService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDevopsagentService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDevopsagentService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDevopsagentService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDevopsagentService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDevopsagentService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDevopsagentService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDevopsagentService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/devopsagent_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsagentService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.accessibleResources">AccessibleResources</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.additionalServiceDetails">AdditionalServiceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.exchangeUrlPrivateConnectionName">ExchangeUrlPrivateConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.privateConnectionName">PrivateConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceDetails">ServiceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference">DataAwsccDevopsagentServiceServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList">DataAwsccDevopsagentServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.targetUrlPrivateConnectionName">TargetUrlPrivateConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccessibleResources`<sup>Required</sup> <a name="AccessibleResources" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.accessibleResources"></a>

```csharp
public StringMapList AccessibleResources { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `AdditionalServiceDetails`<sup>Required</sup> <a name="AdditionalServiceDetails" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.additionalServiceDetails"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference AdditionalServiceDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ExchangeUrlPrivateConnectionName`<sup>Required</sup> <a name="ExchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.exchangeUrlPrivateConnectionName"></a>

```csharp
public string ExchangeUrlPrivateConnectionName { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.privateConnectionName"></a>

```csharp
public string PrivateConnectionName { get; }
```

- *Type:* string

---

##### `ServiceDetails`<sup>Required</sup> <a name="ServiceDetails" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceDetails"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsOutputReference ServiceDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference">DataAwsccDevopsagentServiceServiceDetailsOutputReference</a>

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.tags"></a>

```csharp
public DataAwsccDevopsagentServiceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList">DataAwsccDevopsagentServiceTagsList</a>

---

##### `TargetUrlPrivateConnectionName`<sup>Required</sup> <a name="TargetUrlPrivateConnectionName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.targetUrlPrivateConnectionName"></a>

```csharp
public string TargetUrlPrivateConnectionName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsagentServiceAdditionalServiceDetails <a name="DataAwsccDevopsagentServiceAdditionalServiceDetails" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetails {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty {

};
```


### DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow {

};
```


### DataAwsccDevopsagentServiceConfig <a name="DataAwsccDevopsagentServiceConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/devopsagent_service#id DataAwsccDevopsagentService#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsagentServiceServiceDetails <a name="DataAwsccDevopsagentServiceServiceDetails" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetails {

};
```


### DataAwsccDevopsagentServiceServiceDetailsAzureIdentity <a name="DataAwsccDevopsagentServiceServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsAzureIdentity {

};
```


### DataAwsccDevopsagentServiceServiceDetailsDynatrace <a name="DataAwsccDevopsagentServiceServiceDetailsDynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatrace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsDynatrace {

};
```


### DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig {

};
```


### DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials {

};
```


### DataAwsccDevopsagentServiceServiceDetailsGitLab <a name="DataAwsccDevopsagentServiceServiceDetailsGitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLab.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsGitLab {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServer <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServer {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4 <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4 {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig {

};
```


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken {

};
```


### DataAwsccDevopsagentServiceServiceDetailsPagerDuty <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDuty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsPagerDuty {

};
```


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig {

};
```


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials {

};
```


### DataAwsccDevopsagentServiceServiceDetailsServiceNow <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsServiceNow {

};
```


### DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig {

};
```


### DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials {

};
```


### DataAwsccDevopsagentServiceTags <a name="DataAwsccDevopsagentServiceTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">WebIdentityRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">WebIdentityTokenAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity">DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `WebIdentityRoleArn`<sup>Required</sup> <a name="WebIdentityRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```csharp
public string WebIdentityRoleArn { get; }
```

- *Type:* string

---

##### `WebIdentityTokenAudiences`<sup>Required</sup> <a name="WebIdentityTokenAudiences" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```csharp
public string[] WebIdentityTokenAudiences { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity">DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn">AccountUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace">DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountUrn`<sup>Required</sup> <a name="AccountUrn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```csharp
public string AccountUrn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace">DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab">DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab">DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod">AuthorizationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationMethod`<sup>Required</sup> <a name="AuthorizationMethod" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod"></a>

```csharp
public string AuthorizationMethod { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader">ApiKeyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod">AuthorizationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyHeader`<sup>Required</sup> <a name="ApiKeyHeader" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader"></a>

```csharp
public string ApiKeyHeader { get; }
```

- *Type:* string

---

##### `AuthorizationMethod`<sup>Required</sup> <a name="AuthorizationMethod" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod"></a>

```csharp
public string AuthorizationMethod { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders">CustomHeaders</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn">McpRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders"></a>

```csharp
public StringMap CustomHeaders { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `McpRoleArn`<sup>Required</sup> <a name="McpRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn"></a>

```csharp
public string McpRoleArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader">ApiKeyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod">AuthorizationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyHeader`<sup>Required</sup> <a name="ApiKeyHeader" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader"></a>

```csharp
public string ApiKeyHeader { get; }
```

- *Type:* string

---

##### `AuthorizationMethod`<sup>Required</sup> <a name="AuthorizationMethod" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod"></a>

```csharp
public string AuthorizationMethod { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity">AzureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetails">DataAwsccDevopsagentServiceAdditionalServiceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureIdentity`<sup>Required</sup> <a name="AzureIdentity" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference AzureIdentity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a>

---

##### `Dynatrace`<sup>Required</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference Dynatrace { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a>

---

##### `GitLab`<sup>Required</sup> <a name="GitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference GitLab { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a>

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference McpServer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a>

---

##### `McpServerGrafana`<sup>Required</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference McpServerGrafana { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `McpServerNewRelic`<sup>Required</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference McpServerNewRelic { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `McpServerSigV4`<sup>Required</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference McpServerSigV4 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `McpServerSplunk`<sup>Required</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference McpServerSplunk { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `PagerDuty`<sup>Required</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference PagerDuty { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetails">DataAwsccDevopsagentServiceAdditionalServiceDetails</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty">DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty">DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty</a>

---


### DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference <a name="DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow">DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow">DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow</a>

---


### DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">WebIdentityRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">WebIdentityTokenAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentity">DataAwsccDevopsagentServiceServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `WebIdentityRoleArn`<sup>Required</sup> <a name="WebIdentityRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```csharp
public string WebIdentityRoleArn { get; }
```

- *Type:* string

---

##### `WebIdentityTokenAudiences`<sup>Required</sup> <a name="WebIdentityTokenAudiences" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```csharp
public string[] WebIdentityTokenAudiences { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsAzureIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentity">DataAwsccDevopsagentServiceServiceDetailsAzureIdentity</a>

---


### DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">ClientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">ExchangeParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```csharp
public string ClientName { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ExchangeParameters`<sup>Required</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```csharp
public string ExchangeParameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---


### DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OAuthClientCredentials`<sup>Required</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference OAuthClientCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn">AccountUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatrace">DataAwsccDevopsagentServiceServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountUrn`<sup>Required</sup> <a name="AccountUrn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```csharp
public string AccountUrn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsDynatrace InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatrace">DataAwsccDevopsagentServiceServiceDetailsDynatrace</a>

---


### DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue">TokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLab">DataAwsccDevopsagentServiceServiceDetailsGitLab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue"></a>

```csharp
public string TokenValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsGitLab InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLab">DataAwsccDevopsagentServiceServiceDetailsGitLab</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader">ApiKeyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName">ApiKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue">ApiKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyHeader`<sup>Required</sup> <a name="ApiKeyHeader" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader"></a>

```csharp
public string ApiKeyHeader { get; }
```

- *Type:* string

---

##### `ApiKeyName`<sup>Required</sup> <a name="ApiKeyName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName"></a>

```csharp
public string ApiKeyName { get; }
```

- *Type:* string

---

##### `ApiKeyValue`<sup>Required</sup> <a name="ApiKeyValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue"></a>

```csharp
public string ApiKeyValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">AuthorizationHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName">TokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue">TokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationHeader`<sup>Required</sup> <a name="AuthorizationHeader" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```csharp
public string AuthorizationHeader { get; }
```

- *Type:* string

---

##### `TokenName`<sup>Required</sup> <a name="TokenName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```csharp
public string TokenName { get; }
```

- *Type:* string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```csharp
public string TokenValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">ClientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">ExchangeParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl">ExchangeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```csharp
public string ClientName { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ExchangeParameters`<sup>Required</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```csharp
public string ExchangeParameters { get; }
```

- *Type:* string

---

##### `ExchangeUrl`<sup>Required</sup> <a name="ExchangeUrl" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl"></a>

```csharp
public string ExchangeUrl { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken">BearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a>

---

##### `BearerToken`<sup>Required</sup> <a name="BearerToken" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference BearerToken { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a>

---

##### `OAuthClientCredentials`<sup>Required</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference OAuthClientCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">AuthorizationHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName">TokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue">TokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationHeader`<sup>Required</sup> <a name="AuthorizationHeader" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```csharp
public string AuthorizationHeader { get; }
```

- *Type:* string

---

##### `TokenName`<sup>Required</sup> <a name="TokenName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```csharp
public string TokenName { get; }
```

- *Type:* string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```csharp
public string TokenValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken">BearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BearerToken`<sup>Required</sup> <a name="BearerToken" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference BearerToken { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds">AlertPolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds">ApplicationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids">EntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AlertPolicyIds`<sup>Required</sup> <a name="AlertPolicyIds" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds"></a>

```csharp
public string[] AlertPolicyIds { get; }
```

- *Type:* string[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApplicationIds`<sup>Required</sup> <a name="ApplicationIds" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds"></a>

```csharp
public string[] ApplicationIds { get; }
```

- *Type:* string[]

---

##### `EntityGuids`<sup>Required</sup> <a name="EntityGuids" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids"></a>

```csharp
public string[] EntityGuids { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServer">DataAwsccDevopsagentServiceServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServer">DataAwsccDevopsagentServiceServiceDetailsMcpServer</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders">CustomHeaders</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn">McpRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders"></a>

```csharp
public StringMap CustomHeaders { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `McpRoleArn`<sup>Required</sup> <a name="McpRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn"></a>

```csharp
public string McpRoleArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">AuthorizationHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName">TokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue">TokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationHeader`<sup>Required</sup> <a name="AuthorizationHeader" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```csharp
public string AuthorizationHeader { get; }
```

- *Type:* string

---

##### `TokenName`<sup>Required</sup> <a name="TokenName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```csharp
public string TokenName { get; }
```

- *Type:* string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```csharp
public string TokenValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken">BearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BearerToken`<sup>Required</sup> <a name="BearerToken" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference BearerToken { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk</a>

---


### DataAwsccDevopsagentServiceServiceDetailsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.azureIdentity">AzureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference">DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference">DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetails">DataAwsccDevopsagentServiceServiceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureIdentity`<sup>Required</sup> <a name="AzureIdentity" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.azureIdentity"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference AzureIdentity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference">DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference</a>

---

##### `Dynatrace`<sup>Required</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.dynatrace"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference Dynatrace { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference">DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference</a>

---

##### `GitLab`<sup>Required</sup> <a name="GitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.gitLab"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference GitLab { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference">DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference</a>

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServer"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference McpServer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference</a>

---

##### `McpServerGrafana`<sup>Required</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference McpServerGrafana { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `McpServerNewRelic`<sup>Required</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference McpServerNewRelic { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `McpServerSigV4`<sup>Required</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference McpServerSigV4 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `McpServerSplunk`<sup>Required</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference McpServerSplunk { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `PagerDuty`<sup>Required</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.pagerDuty"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference PagerDuty { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.serviceNow"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetails">DataAwsccDevopsagentServiceServiceDetails</a>

---


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">ClientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">ExchangeParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```csharp
public string ClientName { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ExchangeParameters`<sup>Required</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```csharp
public string ExchangeParameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OAuthClientCredentials`<sup>Required</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference OAuthClientCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDuty">DataAwsccDevopsagentServiceServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a>

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsPagerDuty InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsPagerDuty">DataAwsccDevopsagentServiceServiceDetailsPagerDuty</a>

---


### DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">ClientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">ExchangeParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```csharp
public string ClientName { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ExchangeParameters`<sup>Required</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```csharp
public string ExchangeParameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---


### DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OAuthClientCredentials`<sup>Required</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference OAuthClientCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---


### DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference <a name="DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNow">DataAwsccDevopsagentServiceServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a>

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceServiceDetailsServiceNow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceServiceDetailsServiceNow">DataAwsccDevopsagentServiceServiceDetailsServiceNow</a>

---


### DataAwsccDevopsagentServiceTagsList <a name="DataAwsccDevopsagentServiceTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.get"></a>

```csharp
private DataAwsccDevopsagentServiceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDevopsagentServiceTagsOutputReference <a name="DataAwsccDevopsagentServiceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsagentServiceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTags">DataAwsccDevopsagentServiceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsagentServiceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentService.DataAwsccDevopsagentServiceTags">DataAwsccDevopsagentServiceTags</a>

---



