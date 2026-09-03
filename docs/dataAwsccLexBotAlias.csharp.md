# `dataAwsccLexBotAlias` Submodule <a name="`dataAwsccLexBotAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccLexBotAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLexBotAlias <a name="DataAwsccLexBotAlias" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/lex_bot_alias awscc_lex_bot_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAlias(Construct Scope, string Id, DataAwsccLexBotAliasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig">DataAwsccLexBotAliasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig">DataAwsccLexBotAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLexBotAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLexBotAlias.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLexBotAlias.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLexBotAlias.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLexBotAlias.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccLexBotAlias resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLexBotAlias to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLexBotAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/lex_bot_alias#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLexBotAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasId">BotAliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasLocaleSettings">BotAliasLocaleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList">DataAwsccLexBotAliasBotAliasLocaleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasName">BotAliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasStatus">BotAliasStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasTags">BotAliasTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList">DataAwsccLexBotAliasBotAliasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botId">BotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botVersion">BotVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.conversationLogSettings">ConversationLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference">DataAwsccLexBotAliasConversationLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.sentimentAnalysisSettings">SentimentAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference">DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BotAliasId`<sup>Required</sup> <a name="BotAliasId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasId"></a>

```csharp
public string BotAliasId { get; }
```

- *Type:* string

---

##### `BotAliasLocaleSettings`<sup>Required</sup> <a name="BotAliasLocaleSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasLocaleSettings"></a>

```csharp
public DataAwsccLexBotAliasBotAliasLocaleSettingsList BotAliasLocaleSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList">DataAwsccLexBotAliasBotAliasLocaleSettingsList</a>

---

##### `BotAliasName`<sup>Required</sup> <a name="BotAliasName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasName"></a>

```csharp
public string BotAliasName { get; }
```

- *Type:* string

---

##### `BotAliasStatus`<sup>Required</sup> <a name="BotAliasStatus" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasStatus"></a>

```csharp
public string BotAliasStatus { get; }
```

- *Type:* string

---

##### `BotAliasTags`<sup>Required</sup> <a name="BotAliasTags" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasTags"></a>

```csharp
public DataAwsccLexBotAliasBotAliasTagsList BotAliasTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList">DataAwsccLexBotAliasBotAliasTagsList</a>

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botId"></a>

```csharp
public string BotId { get; }
```

- *Type:* string

---

##### `BotVersion`<sup>Required</sup> <a name="BotVersion" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botVersion"></a>

```csharp
public string BotVersion { get; }
```

- *Type:* string

---

##### `ConversationLogSettings`<sup>Required</sup> <a name="ConversationLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.conversationLogSettings"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsOutputReference ConversationLogSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference">DataAwsccLexBotAliasConversationLogSettingsOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `SentimentAnalysisSettings`<sup>Required</sup> <a name="SentimentAnalysisSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.sentimentAnalysisSettings"></a>

```csharp
public DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference SentimentAnalysisSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference">DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLexBotAliasBotAliasLocaleSettings <a name="DataAwsccLexBotAliasBotAliasLocaleSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasLocaleSettings {

};
```


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting {

};
```


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification {

};
```


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook {

};
```


### DataAwsccLexBotAliasBotAliasTags <a name="DataAwsccLexBotAliasBotAliasTags" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasTags {

};
```


### DataAwsccLexBotAliasConfig <a name="DataAwsccLexBotAliasConfig" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/lex_bot_alias#id DataAwsccLexBotAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLexBotAliasConversationLogSettings <a name="DataAwsccLexBotAliasConversationLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettings {

};
```


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings {

};
```


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination {

};
```


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket {

};
```


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettings <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsTextLogSettings {

};
```


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination {

};
```


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch {

};
```


### DataAwsccLexBotAliasSentimentAnalysisSettings <a name="DataAwsccLexBotAliasSentimentAnalysisSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasSentimentAnalysisSettings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion">CodeHookInterfaceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeHookInterfaceVersion`<sup>Required</sup> <a name="CodeHookInterfaceVersion" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion"></a>

```csharp
public string CodeHookInterfaceVersion { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook">LambdaCodeHook</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaCodeHook`<sup>Required</sup> <a name="LambdaCodeHook" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook"></a>

```csharp
public DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference LambdaCodeHook { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification">CodeHookSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeHookSpecification`<sup>Required</sup> <a name="CodeHookSpecification" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification"></a>

```csharp
public DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference CodeHookSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsList <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasLocaleSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.get"></a>

```csharp
private DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting">BotAliasLocaleSetting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId">LocaleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings">DataAwsccLexBotAliasBotAliasLocaleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BotAliasLocaleSetting`<sup>Required</sup> <a name="BotAliasLocaleSetting" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting"></a>

```csharp
public DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference BotAliasLocaleSetting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a>

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId"></a>

```csharp
public string LocaleId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasBotAliasLocaleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings">DataAwsccLexBotAliasBotAliasLocaleSettings</a>

---


### DataAwsccLexBotAliasBotAliasTagsList <a name="DataAwsccLexBotAliasBotAliasTagsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.get"></a>

```csharp
private DataAwsccLexBotAliasBotAliasTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLexBotAliasBotAliasTagsOutputReference <a name="DataAwsccLexBotAliasBotAliasTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasBotAliasTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags">DataAwsccLexBotAliasBotAliasTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasBotAliasTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags">DataAwsccLexBotAliasBotAliasTags</a>

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference S3Bucket { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix">LogPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `LogPrefix`<sup>Required</sup> <a name="LogPrefix" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix"></a>

```csharp
public string LogPrefix { get; }
```

- *Type:* string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.get"></a>

```csharp
private DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings</a>

---


### DataAwsccLexBotAliasConversationLogSettingsOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings">AudioLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.textLogSettings">TextLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings">DataAwsccLexBotAliasConversationLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioLogSettings`<sup>Required</sup> <a name="AudioLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList AudioLogSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList</a>

---

##### `TextLogSettings`<sup>Required</sup> <a name="TextLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.textLogSettings"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList TextLogSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings">DataAwsccLexBotAliasConversationLogSettings</a>

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix">LogPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `LogPrefix`<sup>Required</sup> <a name="LogPrefix" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix"></a>

```csharp
public string LogPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference Cloudwatch { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.get"></a>

```csharp
private DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings">DataAwsccLexBotAliasConversationLogSettingsTextLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasConversationLogSettingsTextLogSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings">DataAwsccLexBotAliasConversationLogSettingsTextLogSettings</a>

---


### DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference <a name="DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment">DetectSentiment</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings">DataAwsccLexBotAliasSentimentAnalysisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetectSentiment`<sup>Required</sup> <a name="DetectSentiment" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment"></a>

```csharp
public IResolvable DetectSentiment { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLexBotAliasSentimentAnalysisSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings">DataAwsccLexBotAliasSentimentAnalysisSettings</a>

---



