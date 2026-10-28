# `dataAwsccSecurityagentIntegration` Submodule <a name="`dataAwsccSecurityagentIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentIntegration <a name="DataAwsccSecurityagentIntegration" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/securityagent_integration awscc_securityagent_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegration(Construct Scope, string Id, DataAwsccSecurityagentIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig">DataAwsccSecurityagentIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig">DataAwsccSecurityagentIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentIntegration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSecurityagentIntegration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecurityagentIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecurityagentIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/securityagent_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.privateConnectionName">PrivateConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerInput">ProviderInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference">DataAwsccSecurityagentIntegrationProviderInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList">DataAwsccSecurityagentIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.privateConnectionName"></a>

```csharp
public string PrivateConnectionName { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Required</sup> <a name="ProviderInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerInput"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInputOutputReference ProviderInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference">DataAwsccSecurityagentIntegrationProviderInputOutputReference</a>

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.tags"></a>

```csharp
public DataAwsccSecurityagentIntegrationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList">DataAwsccSecurityagentIntegrationTagsList</a>

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentIntegrationConfig <a name="DataAwsccSecurityagentIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/securityagent_integration#id DataAwsccSecurityagentIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentIntegrationProviderInput <a name="DataAwsccSecurityagentIntegrationProviderInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInput {

};
```


### DataAwsccSecurityagentIntegrationProviderInputBitbucket <a name="DataAwsccSecurityagentIntegrationProviderInputBitbucket" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInputBitbucket {

};
```


### DataAwsccSecurityagentIntegrationProviderInputConfluence <a name="DataAwsccSecurityagentIntegrationProviderInputConfluence" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInputConfluence {

};
```


### DataAwsccSecurityagentIntegrationProviderInputGithub <a name="DataAwsccSecurityagentIntegrationProviderInputGithub" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInputGithub {

};
```


### DataAwsccSecurityagentIntegrationProviderInputGitlab <a name="DataAwsccSecurityagentIntegrationProviderInputGitlab" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlab.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInputGitlab {

};
```


### DataAwsccSecurityagentIntegrationTags <a name="DataAwsccSecurityagentIntegrationTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucket">DataAwsccSecurityagentIntegrationProviderInputBitbucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInputBitbucket InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucket">DataAwsccSecurityagentIntegrationProviderInputBitbucket</a>

---


### DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl">SiteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluence">DataAwsccSecurityagentIntegrationProviderInputConfluence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `SiteUrl`<sup>Required</sup> <a name="SiteUrl" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl"></a>

```csharp
public string SiteUrl { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInputConfluence InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluence">DataAwsccSecurityagentIntegrationProviderInputConfluence</a>

---


### DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithub">DataAwsccSecurityagentIntegrationProviderInputGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInputGithub InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithub">DataAwsccSecurityagentIntegrationProviderInputGithub</a>

---


### DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlab">DataAwsccSecurityagentIntegrationProviderInputGitlab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInputGitlab InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlab">DataAwsccSecurityagentIntegrationProviderInputGitlab</a>

---


### DataAwsccSecurityagentIntegrationProviderInputOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationProviderInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.bitbucket">Bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference">DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.confluence">Confluence</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference">DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference">DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.gitlab">Gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference">DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInput">DataAwsccSecurityagentIntegrationProviderInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bitbucket`<sup>Required</sup> <a name="Bitbucket" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.bitbucket"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference Bitbucket { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference">DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference</a>

---

##### `Confluence`<sup>Required</sup> <a name="Confluence" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.confluence"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference Confluence { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference">DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.github"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference Github { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference">DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference</a>

---

##### `Gitlab`<sup>Required</sup> <a name="Gitlab" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.gitlab"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference Gitlab { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference">DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentIntegrationProviderInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInput">DataAwsccSecurityagentIntegrationProviderInput</a>

---


### DataAwsccSecurityagentIntegrationTagsList <a name="DataAwsccSecurityagentIntegrationTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.get"></a>

```csharp
private DataAwsccSecurityagentIntegrationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityagentIntegrationTagsOutputReference <a name="DataAwsccSecurityagentIntegrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentIntegrationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTags">DataAwsccSecurityagentIntegrationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentIntegrationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTags">DataAwsccSecurityagentIntegrationTags</a>

---



