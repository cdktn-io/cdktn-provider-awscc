# `dataAwsccWorkspacesDirectory` Submodule <a name="`dataAwsccWorkspacesDirectory` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesDirectory <a name="DataAwsccWorkspacesDirectory" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory awscc_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectory(Construct Scope, string Id, DataAwsccWorkspacesDirectoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig">DataAwsccWorkspacesDirectoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig">DataAwsccWorkspacesDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspacesDirectory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspacesDirectory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspacesDirectory.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspacesDirectory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccWorkspacesDirectory resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspacesDirectory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference">DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.certificateBasedAuthProperties">CertificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.customerUserName">CustomerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryType">DirectoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpv6Addresses">DnsIpv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.enableSelfService">EnableSelfService</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.endpointEncryptionMode">EndpointEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.iamRoleId">IamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcConfig">IdcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference">DataAwsccWorkspacesDirectoryIdcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.ipGroupIds">IpGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.microsoftEntraConfig">MicrosoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference">DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.registrationCode">RegistrationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.samlProperties">SamlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference">DataAwsccWorkspacesDirectorySamlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.selfservicePermissions">SelfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference">DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.streamingProperties">StreamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList">DataAwsccWorkspacesDirectoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.userIdentityType">UserIdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceAccessProperties">WorkspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceCreationProperties">WorkspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryDescription">WorkspaceDirectoryDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryName">WorkspaceDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceSecurityGroupId">WorkspaceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceType">WorkspaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ActiveDirectoryConfig`<sup>Required</sup> <a name="ActiveDirectoryConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.activeDirectoryConfig"></a>

```csharp
public DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference ActiveDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference">DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference</a>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateBasedAuthProperties`<sup>Required</sup> <a name="CertificateBasedAuthProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.certificateBasedAuthProperties"></a>

```csharp
public DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference CertificateBasedAuthProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a>

---

##### `CustomerUserName`<sup>Required</sup> <a name="CustomerUserName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.customerUserName"></a>

```csharp
public string CustomerUserName { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryType"></a>

```csharp
public string DirectoryType { get; }
```

- *Type:* string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpAddresses"></a>

```csharp
public string[] DnsIpAddresses { get; }
```

- *Type:* string[]

---

##### `DnsIpv6Addresses`<sup>Required</sup> <a name="DnsIpv6Addresses" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpv6Addresses"></a>

```csharp
public string[] DnsIpv6Addresses { get; }
```

- *Type:* string[]

---

##### `EnableSelfService`<sup>Required</sup> <a name="EnableSelfService" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.enableSelfService"></a>

```csharp
public IResolvable EnableSelfService { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EndpointEncryptionMode`<sup>Required</sup> <a name="EndpointEncryptionMode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.endpointEncryptionMode"></a>

```csharp
public string EndpointEncryptionMode { get; }
```

- *Type:* string

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.iamRoleId"></a>

```csharp
public string IamRoleId { get; }
```

- *Type:* string

---

##### `IdcConfig`<sup>Required</sup> <a name="IdcConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcConfig"></a>

```csharp
public DataAwsccWorkspacesDirectoryIdcConfigOutputReference IdcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference">DataAwsccWorkspacesDirectoryIdcConfigOutputReference</a>

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; }
```

- *Type:* string

---

##### `IpGroupIds`<sup>Required</sup> <a name="IpGroupIds" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.ipGroupIds"></a>

```csharp
public string[] IpGroupIds { get; }
```

- *Type:* string[]

---

##### `MicrosoftEntraConfig`<sup>Required</sup> <a name="MicrosoftEntraConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.microsoftEntraConfig"></a>

```csharp
public DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference MicrosoftEntraConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference">DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference</a>

---

##### `RegistrationCode`<sup>Required</sup> <a name="RegistrationCode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.registrationCode"></a>

```csharp
public string RegistrationCode { get; }
```

- *Type:* string

---

##### `SamlProperties`<sup>Required</sup> <a name="SamlProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.samlProperties"></a>

```csharp
public DataAwsccWorkspacesDirectorySamlPropertiesOutputReference SamlProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference">DataAwsccWorkspacesDirectorySamlPropertiesOutputReference</a>

---

##### `SelfservicePermissions`<sup>Required</sup> <a name="SelfservicePermissions" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.selfservicePermissions"></a>

```csharp
public DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference SelfservicePermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference">DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StreamingProperties`<sup>Required</sup> <a name="StreamingProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.streamingProperties"></a>

```csharp
public DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference StreamingProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference</a>

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tags"></a>

```csharp
public DataAwsccWorkspacesDirectoryTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList">DataAwsccWorkspacesDirectoryTagsList</a>

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `UserIdentityType`<sup>Required</sup> <a name="UserIdentityType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.userIdentityType"></a>

```csharp
public string UserIdentityType { get; }
```

- *Type:* string

---

##### `WorkspaceAccessProperties`<sup>Required</sup> <a name="WorkspaceAccessProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceAccessProperties"></a>

```csharp
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference WorkspaceAccessProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `WorkspaceCreationProperties`<sup>Required</sup> <a name="WorkspaceCreationProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceCreationProperties"></a>

```csharp
public DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference WorkspaceCreationProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `WorkspaceDirectoryDescription`<sup>Required</sup> <a name="WorkspaceDirectoryDescription" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryDescription"></a>

```csharp
public string WorkspaceDirectoryDescription { get; }
```

- *Type:* string

---

##### `WorkspaceDirectoryName`<sup>Required</sup> <a name="WorkspaceDirectoryName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryName"></a>

```csharp
public string WorkspaceDirectoryName { get; }
```

- *Type:* string

---

##### `WorkspaceSecurityGroupId`<sup>Required</sup> <a name="WorkspaceSecurityGroupId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```csharp
public string WorkspaceSecurityGroupId { get; }
```

- *Type:* string

---

##### `WorkspaceType`<sup>Required</sup> <a name="WorkspaceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceType"></a>

```csharp
public string WorkspaceType { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesDirectoryActiveDirectoryConfig <a name="DataAwsccWorkspacesDirectoryActiveDirectoryConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryActiveDirectoryConfig {

};
```


### DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties <a name="DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties {

};
```


### DataAwsccWorkspacesDirectoryConfig <a name="DataAwsccWorkspacesDirectoryConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#id DataAwsccWorkspacesDirectory#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesDirectoryIdcConfig <a name="DataAwsccWorkspacesDirectoryIdcConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryIdcConfig {

};
```


### DataAwsccWorkspacesDirectoryMicrosoftEntraConfig <a name="DataAwsccWorkspacesDirectoryMicrosoftEntraConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryMicrosoftEntraConfig {

};
```


### DataAwsccWorkspacesDirectorySamlProperties <a name="DataAwsccWorkspacesDirectorySamlProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectorySamlProperties {

};
```


### DataAwsccWorkspacesDirectorySelfservicePermissions <a name="DataAwsccWorkspacesDirectorySelfservicePermissions" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectorySelfservicePermissions {

};
```


### DataAwsccWorkspacesDirectoryStreamingProperties <a name="DataAwsccWorkspacesDirectoryStreamingProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingProperties {

};
```


### DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator {

};
```


### DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors {

};
```


### DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings {

};
```


### DataAwsccWorkspacesDirectoryTags <a name="DataAwsccWorkspacesDirectoryTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryTags {

};
```


### DataAwsccWorkspacesDirectoryWorkspaceAccessProperties <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryWorkspaceAccessProperties {

};
```


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig {

};
```


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints {

};
```


### DataAwsccWorkspacesDirectoryWorkspaceCreationProperties <a name="DataAwsccWorkspacesDirectoryWorkspaceCreationProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryWorkspaceCreationProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference <a name="DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn">ServiceAccountSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig">DataAwsccWorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `ServiceAccountSecretArn`<sup>Required</sup> <a name="ServiceAccountSecretArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn"></a>

```csharp
public string ServiceAccountSecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryActiveDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig">DataAwsccWorkspacesDirectoryActiveDirectoryConfig</a>

---


### DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties">DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```csharp
public string CertificateAuthorityArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties">DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties</a>

---


### DataAwsccWorkspacesDirectoryIdcConfigOutputReference <a name="DataAwsccWorkspacesDirectoryIdcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryIdcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig">DataAwsccWorkspacesDirectoryIdcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryIdcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig">DataAwsccWorkspacesDirectoryIdcConfig</a>

---


### DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference <a name="DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn">ApplicationConfigSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig">DataAwsccWorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationConfigSecretArn`<sup>Required</sup> <a name="ApplicationConfigSecretArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn"></a>

```csharp
public string ApplicationConfigSecretArn { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryMicrosoftEntraConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig">DataAwsccWorkspacesDirectoryMicrosoftEntraConfig</a>

---


### DataAwsccWorkspacesDirectorySamlPropertiesOutputReference <a name="DataAwsccWorkspacesDirectorySamlPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectorySamlPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName">RelayStateParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl">UserAccessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties">DataAwsccWorkspacesDirectorySamlProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelayStateParameterName`<sup>Required</sup> <a name="RelayStateParameterName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName"></a>

```csharp
public string RelayStateParameterName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UserAccessUrl`<sup>Required</sup> <a name="UserAccessUrl" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl"></a>

```csharp
public string UserAccessUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectorySamlProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties">DataAwsccWorkspacesDirectorySamlProperties</a>

---


### DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference <a name="DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType">ChangeComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize">IncreaseVolumeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace">RebuildWorkspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace">RestartWorkspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode">SwitchRunningMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions">DataAwsccWorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangeComputeType`<sup>Required</sup> <a name="ChangeComputeType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType"></a>

```csharp
public string ChangeComputeType { get; }
```

- *Type:* string

---

##### `IncreaseVolumeSize`<sup>Required</sup> <a name="IncreaseVolumeSize" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize"></a>

```csharp
public string IncreaseVolumeSize { get; }
```

- *Type:* string

---

##### `RebuildWorkspace`<sup>Required</sup> <a name="RebuildWorkspace" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace"></a>

```csharp
public string RebuildWorkspace { get; }
```

- *Type:* string

---

##### `RestartWorkspace`<sup>Required</sup> <a name="RestartWorkspace" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace"></a>

```csharp
public string RestartWorkspace { get; }
```

- *Type:* string

---

##### `SwitchRunningMode`<sup>Required</sup> <a name="SwitchRunningMode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode"></a>

```csharp
public string SwitchRunningMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectorySelfservicePermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions">DataAwsccWorkspacesDirectorySelfservicePermissions</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol">PreferredProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `PreferredProtocol`<sup>Required</sup> <a name="PreferredProtocol" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol"></a>

```csharp
public string PreferredProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator">GlobalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors">StorageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol">StreamingExperiencePreferredProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings">UserSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties">DataAwsccWorkspacesDirectoryStreamingProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlobalAccelerator`<sup>Required</sup> <a name="GlobalAccelerator" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator"></a>

```csharp
public DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference GlobalAccelerator { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a>

---

##### `StorageConnectors`<sup>Required</sup> <a name="StorageConnectors" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors"></a>

```csharp
public DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList StorageConnectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a>

---

##### `StreamingExperiencePreferredProtocol`<sup>Required</sup> <a name="StreamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol"></a>

```csharp
public string StreamingExperiencePreferredProtocol { get; }
```

- *Type:* string

---

##### `UserSettings`<sup>Required</sup> <a name="UserSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings"></a>

```csharp
public DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList UserSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryStreamingProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties">DataAwsccWorkspacesDirectoryStreamingProperties</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get"></a>

```csharp
private DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.get"></a>

```csharp
private DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength">MaximumLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `MaximumLength`<sup>Required</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength"></a>

```csharp
public double MaximumLength { get; }
```

- *Type:* double

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings</a>

---


### DataAwsccWorkspacesDirectoryTagsList <a name="DataAwsccWorkspacesDirectoryTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.get"></a>

```csharp
private DataAwsccWorkspacesDirectoryTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWorkspacesDirectoryTagsOutputReference <a name="DataAwsccWorkspacesDirectoryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags">DataAwsccWorkspacesDirectoryTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags">DataAwsccWorkspacesDirectoryTags</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get"></a>

```csharp
private DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType">AccessEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessEndpointType`<sup>Required</sup> <a name="AccessEndpointType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType"></a>

```csharp
public string AccessEndpointType { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints">AccessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols">InternetFallbackProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessEndpoints`<sup>Required</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints"></a>

```csharp
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList AccessEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a>

---

##### `InternetFallbackProtocols`<sup>Required</sup> <a name="InternetFallbackProtocols" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols"></a>

```csharp
public string[] InternetFallbackProtocols { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig">AccessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">DeviceTypeAndroid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs">DeviceTypeChromeOs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">DeviceTypeIos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">DeviceTypeLinux</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">DeviceTypeOsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">DeviceTypeWeb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">DeviceTypeWindows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient">DeviceTypeWorkSpacesThinClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient">DeviceTypeZeroClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties">DataAwsccWorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessEndpointConfig`<sup>Required</sup> <a name="AccessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig"></a>

```csharp
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference AccessEndpointConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a>

---

##### `DeviceTypeAndroid`<sup>Required</sup> <a name="DeviceTypeAndroid" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```csharp
public string DeviceTypeAndroid { get; }
```

- *Type:* string

---

##### `DeviceTypeChromeOs`<sup>Required</sup> <a name="DeviceTypeChromeOs" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs"></a>

```csharp
public string DeviceTypeChromeOs { get; }
```

- *Type:* string

---

##### `DeviceTypeIos`<sup>Required</sup> <a name="DeviceTypeIos" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```csharp
public string DeviceTypeIos { get; }
```

- *Type:* string

---

##### `DeviceTypeLinux`<sup>Required</sup> <a name="DeviceTypeLinux" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```csharp
public string DeviceTypeLinux { get; }
```

- *Type:* string

---

##### `DeviceTypeOsx`<sup>Required</sup> <a name="DeviceTypeOsx" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```csharp
public string DeviceTypeOsx { get; }
```

- *Type:* string

---

##### `DeviceTypeWeb`<sup>Required</sup> <a name="DeviceTypeWeb" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```csharp
public string DeviceTypeWeb { get; }
```

- *Type:* string

---

##### `DeviceTypeWindows`<sup>Required</sup> <a name="DeviceTypeWindows" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```csharp
public string DeviceTypeWindows { get; }
```

- *Type:* string

---

##### `DeviceTypeWorkSpacesThinClient`<sup>Required</sup> <a name="DeviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient"></a>

```csharp
public string DeviceTypeWorkSpacesThinClient { get; }
```

- *Type:* string

---

##### `DeviceTypeZeroClient`<sup>Required</sup> <a name="DeviceTypeZeroClient" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient"></a>

```csharp
public string DeviceTypeZeroClient { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryWorkspaceAccessProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties">DataAwsccWorkspacesDirectoryWorkspaceAccessProperties</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">CustomSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">DefaultOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">EnableMaintenanceMode</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn">InstanceIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">UserEnabledAsLocalAdministrator</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties">DataAwsccWorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupId`<sup>Required</sup> <a name="CustomSecurityGroupId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```csharp
public string CustomSecurityGroupId { get; }
```

- *Type:* string

---

##### `DefaultOu`<sup>Required</sup> <a name="DefaultOu" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```csharp
public string DefaultOu { get; }
```

- *Type:* string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```csharp
public IResolvable EnableInternetAccess { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnableMaintenanceMode`<sup>Required</sup> <a name="EnableMaintenanceMode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```csharp
public IResolvable EnableMaintenanceMode { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InstanceIamRoleArn`<sup>Required</sup> <a name="InstanceIamRoleArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn"></a>

```csharp
public string InstanceIamRoleArn { get; }
```

- *Type:* string

---

##### `UserEnabledAsLocalAdministrator`<sup>Required</sup> <a name="UserEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```csharp
public IResolvable UserEnabledAsLocalAdministrator { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesDirectoryWorkspaceCreationProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties">DataAwsccWorkspacesDirectoryWorkspaceCreationProperties</a>

---



