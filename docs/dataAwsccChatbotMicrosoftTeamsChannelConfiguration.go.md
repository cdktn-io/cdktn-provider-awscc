# `dataAwsccChatbotMicrosoftTeamsChannelConfiguration` Submodule <a name="`dataAwsccChatbotMicrosoftTeamsChannelConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChatbotMicrosoftTeamsChannelConfiguration <a name="DataAwsccChatbotMicrosoftTeamsChannelConfiguration" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/chatbot_microsoft_teams_channel_configuration awscc_chatbot_microsoft_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchatbotmicrosoftteamschannelconfiguration"

dataawsccchatbotmicrosoftteamschannelconfiguration.NewDataAwsccChatbotMicrosoftTeamsChannelConfiguration(scope Construct, id *string, config DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig) DataAwsccChatbotMicrosoftTeamsChannelConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig">DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig">DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchatbotmicrosoftteamschannelconfiguration"

dataawsccchatbotmicrosoftteamschannelconfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchatbotmicrosoftteamschannelconfiguration"

dataawsccchatbotmicrosoftteamschannelconfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchatbotmicrosoftteamschannelconfiguration"

dataawsccchatbotmicrosoftteamschannelconfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchatbotmicrosoftteamschannelconfiguration"

dataawsccchatbotmicrosoftteamschannelconfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccChatbotMicrosoftTeamsChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccChatbotMicrosoftTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/chatbot_microsoft_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChatbotMicrosoftTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.configurationName">ConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns">CustomizationResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies">GuardrailPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns">SnsTopicArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList">DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId">TeamsChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName">TeamsChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId">TeamsTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired">UserRoleRequired</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.configurationName"></a>

```go
func ConfigurationName() *string
```

- *Type:* *string

---

##### `CustomizationResourceArns`<sup>Required</sup> <a name="CustomizationResourceArns" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns"></a>

```go
func CustomizationResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `GuardrailPolicies`<sup>Required</sup> <a name="GuardrailPolicies" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies"></a>

```go
func GuardrailPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel"></a>

```go
func LoggingLevel() *string
```

- *Type:* *string

---

##### `SnsTopicArns`<sup>Required</sup> <a name="SnsTopicArns" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns"></a>

```go
func SnsTopicArns() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.tags"></a>

```go
func Tags() DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList">DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList</a>

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `TeamsChannelId`<sup>Required</sup> <a name="TeamsChannelId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId"></a>

```go
func TeamsChannelId() *string
```

- *Type:* *string

---

##### `TeamsChannelName`<sup>Required</sup> <a name="TeamsChannelName" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName"></a>

```go
func TeamsChannelName() *string
```

- *Type:* *string

---

##### `TeamsTenantId`<sup>Required</sup> <a name="TeamsTenantId" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId"></a>

```go
func TeamsTenantId() *string
```

- *Type:* *string

---

##### `UserRoleRequired`<sup>Required</sup> <a name="UserRoleRequired" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired"></a>

```go
func UserRoleRequired() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig <a name="DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchatbotmicrosoftteamschannelconfiguration"

&dataawsccchatbotmicrosoftteamschannelconfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/chatbot_microsoft_teams_channel_configuration#id DataAwsccChatbotMicrosoftTeamsChannelConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags <a name="DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchatbotmicrosoftteamschannelconfiguration"

&dataawsccchatbotmicrosoftteamschannelconfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList <a name="DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchatbotmicrosoftteamschannelconfiguration"

dataawsccchatbotmicrosoftteamschannelconfiguration.NewDataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference <a name="DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchatbotmicrosoftteamschannelconfiguration"

dataawsccchatbotmicrosoftteamschannelconfiguration.NewDataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags">DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChatbotMicrosoftTeamsChannelConfiguration.DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags">DataAwsccChatbotMicrosoftTeamsChannelConfigurationTags</a>

---



