# `dataAwsccAppintegrationsApplication` Submodule <a name="`dataAwsccAppintegrationsApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppintegrationsApplication <a name="DataAwsccAppintegrationsApplication" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appintegrations_application awscc_appintegrations_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplication(Construct Scope, string Id, DataAwsccAppintegrationsApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig">DataAwsccAppintegrationsApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig">DataAwsccAppintegrationsApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppintegrationsApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppintegrationsApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppintegrationsApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppintegrationsApplication.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppintegrationsApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccAppintegrationsApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppintegrationsApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppintegrationsApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appintegrations_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppintegrationsApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationConfig">ApplicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference">DataAwsccAppintegrationsApplicationApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationSourceConfig">ApplicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference">DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.iframeConfig">IframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference">DataAwsccAppintegrationsApplicationIframeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.initializationTimeout">InitializationTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.isService">IsService</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList">DataAwsccAppintegrationsApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `ApplicationConfig`<sup>Required</sup> <a name="ApplicationConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationConfig"></a>

```csharp
public DataAwsccAppintegrationsApplicationApplicationConfigOutputReference ApplicationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference">DataAwsccAppintegrationsApplicationApplicationConfigOutputReference</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ApplicationSourceConfig`<sup>Required</sup> <a name="ApplicationSourceConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationSourceConfig"></a>

```csharp
public DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference ApplicationSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference">DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference</a>

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IframeConfig`<sup>Required</sup> <a name="IframeConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.iframeConfig"></a>

```csharp
public DataAwsccAppintegrationsApplicationIframeConfigOutputReference IframeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference">DataAwsccAppintegrationsApplicationIframeConfigOutputReference</a>

---

##### `InitializationTimeout`<sup>Required</sup> <a name="InitializationTimeout" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.initializationTimeout"></a>

```csharp
public double InitializationTimeout { get; }
```

- *Type:* double

---

##### `IsService`<sup>Required</sup> <a name="IsService" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.isService"></a>

```csharp
public IResolvable IsService { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.tags"></a>

```csharp
public DataAwsccAppintegrationsApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList">DataAwsccAppintegrationsApplicationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppintegrationsApplicationApplicationConfig <a name="DataAwsccAppintegrationsApplicationApplicationConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationApplicationConfig {

};
```


### DataAwsccAppintegrationsApplicationApplicationConfigContactHandling <a name="DataAwsccAppintegrationsApplicationApplicationConfigContactHandling" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationApplicationConfigContactHandling {

};
```


### DataAwsccAppintegrationsApplicationApplicationSourceConfig <a name="DataAwsccAppintegrationsApplicationApplicationSourceConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationApplicationSourceConfig {

};
```


### DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig <a name="DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig {

};
```


### DataAwsccAppintegrationsApplicationConfig <a name="DataAwsccAppintegrationsApplicationConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appintegrations_application#id DataAwsccAppintegrationsApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppintegrationsApplicationIframeConfig <a name="DataAwsccAppintegrationsApplicationIframeConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationIframeConfig {

};
```


### DataAwsccAppintegrationsApplicationTags <a name="DataAwsccAppintegrationsApplicationTags" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference <a name="DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandling">DataAwsccAppintegrationsApplicationApplicationConfigContactHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppintegrationsApplicationApplicationConfigContactHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandling">DataAwsccAppintegrationsApplicationApplicationConfigContactHandling</a>

---


### DataAwsccAppintegrationsApplicationApplicationConfigOutputReference <a name="DataAwsccAppintegrationsApplicationApplicationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationApplicationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling">ContactHandling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference">DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfig">DataAwsccAppintegrationsApplicationApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactHandling`<sup>Required</sup> <a name="ContactHandling" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling"></a>

```csharp
public DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference ContactHandling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference">DataAwsccAppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppintegrationsApplicationApplicationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationConfig">DataAwsccAppintegrationsApplicationApplicationConfig</a>

---


### DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference <a name="DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl">AccessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins">ApprovedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessUrl`<sup>Required</sup> <a name="AccessUrl" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl"></a>

```csharp
public string AccessUrl { get; }
```

- *Type:* string

---

##### `ApprovedOrigins`<sup>Required</sup> <a name="ApprovedOrigins" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins"></a>

```csharp
public string[] ApprovedOrigins { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---


### DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference <a name="DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig">ExternalUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfig">DataAwsccAppintegrationsApplicationApplicationSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalUrlConfig`<sup>Required</sup> <a name="ExternalUrlConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig"></a>

```csharp
public DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference ExternalUrlConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">DataAwsccAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppintegrationsApplicationApplicationSourceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationApplicationSourceConfig">DataAwsccAppintegrationsApplicationApplicationSourceConfig</a>

---


### DataAwsccAppintegrationsApplicationIframeConfigOutputReference <a name="DataAwsccAppintegrationsApplicationIframeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationIframeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.allow">Allow</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.sandbox">Sandbox</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfig">DataAwsccAppintegrationsApplicationIframeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.allow"></a>

```csharp
public string[] Allow { get; }
```

- *Type:* string[]

---

##### `Sandbox`<sup>Required</sup> <a name="Sandbox" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.sandbox"></a>

```csharp
public string[] Sandbox { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppintegrationsApplicationIframeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationIframeConfig">DataAwsccAppintegrationsApplicationIframeConfig</a>

---


### DataAwsccAppintegrationsApplicationTagsList <a name="DataAwsccAppintegrationsApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.get"></a>

```csharp
private DataAwsccAppintegrationsApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAppintegrationsApplicationTagsOutputReference <a name="DataAwsccAppintegrationsApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppintegrationsApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTags">DataAwsccAppintegrationsApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppintegrationsApplicationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsApplication.DataAwsccAppintegrationsApplicationTags">DataAwsccAppintegrationsApplicationTags</a>

---



